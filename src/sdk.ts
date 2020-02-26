import io from "socket.io-client";

declare global {
	interface Window {
		connected: boolean;
		gotUserMedia: boolean;
		userStream: any;
		iceConfig: any;
		peerConnection: RTCPeerConnection;
		userName: string;
		userEnded: any;
		callOut: any;
		endCall: () => any;
		userOut: boolean;
		isCalling: boolean;
		socket: any;
		init: () => void;
		makeCall: (username: string) => void;
		callEnded: boolean;
		connectToSocket: (userName: string) => void;
	}
}

window.connected = false;
window.gotUserMedia = false;
window.userStream;

window.connectToSocket = async function connectSocket(userName) {
	const response = await fetch("https://echo-land.herokuapp.com/breakTheIce");
	const data = await response.json();
	window.iceConfig = data.config;
	console.log("got ice data", data.config);
	window.peerConnection = new RTCPeerConnection({ iceServers: data.config.iceServers });

	const offerOptions = {
		offerToReceiveAudio: true,
		offerToReceiveVideo: false,
		voiceActivityDetection: false,
	};

	const connResponse = await fetch(`https://echo-land.herokuapp.com/connect?userName=${userName}`);
	const connData = await connResponse.json();
	if (connData.status) {
		window.connected = true;
		window.socket = io("https://echo-land.herokuapp.com", {
			query: { userName: userName },
		});
		window.socket.on("incomingIceCandidate", async incCandidate => {
			console.log(new Date());
			console.log("incoming call ice candidate=====", incCandidate);
			await window.peerConnection.addIceCandidate(incCandidate.candidate);
		});

		window.socket.on("userList", data => {
			console.log(data);
		});

		window.socket.on("userOut", () => {
			if (!window.userOut) {
				alert("User not present");
			}
			window.userOut = true;
		});
		window.socket.on("callEnded", () => {
			if (!window.callEnded) {
				alert("Call ended");
			}
			window.callEnded = true;
		});

		window.socket.on("incomingCall", async offerData => {
			const remoteStream = new MediaStream();
			const remoteAudio: any = document.getElementById("audioPlayer");
			remoteAudio.srcObject = remoteStream;

			window.peerConnection.addEventListener("track", async event => {
				// remoteStream.addTrack(event.track, remoteStream);
				remoteStream.addTrack(event.track);
			});
			window.peerConnection.addEventListener("icecandidate", event => {
				console.log("ice candidate event on callee");
				console.log(event.candidate);
				if (event.candidate) {
					window.socket.emit("newIceCandidate", { candidate: event.candidate, sendTo: offerData.callFrom });
					console.log("new ice candidate sent");
				}
			});
			window.peerConnection.addEventListener("connectionstatechange", event => {
				console.log(event);
				if (window.peerConnection.connectionState === "connected") {
					window.socket.emit("peersConnected", { callee: window.userName, caller: offerData.callFrom });
					console.log("peers connected=========================================");
				}
			});
			console.log("peer connection created", window.peerConnection);
			window.peerConnection.setRemoteDescription(offerData.offer);
			console.log("remote description set");
			console.log("getting user media");
			const localStream = await getUserMedia();
			console.log("got user media");
			// const audioTracks = localStream.getAudioTracks();
			localStream.getTracks().forEach(track => window.peerConnection.addTrack(track, localStream));
			console.log("Adding Local Stream to peer connection");
			const answer = await window.peerConnection.createAnswer(offerOptions);
			console.log("anwer created", answer);
			await window.peerConnection.setLocalDescription(answer);
			console.log("answer set in local desc");

			window.socket.emit("answerIncomingCall", { answer, answerTo: offerData.callFrom, answerFrom: offerData.callTo });
			console.log("incoming call answered");
		});
	} else {
		alert("Duplicate Username");
	}
};

async function getUserMedia() {
	if (window.connected && window.userName && !window.gotUserMedia) {
		try {
			window.gotUserMedia = true;
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			return stream;
		} catch (err) {
			console.log("error in getting user media", err);
		}
	}
}

window.makeCall = async function makeCall(username) {
	if (window.isCalling) {
		alert("Already Calling.");
	}

	if (!username) {
		return alert("Goddamit! 🤦");
	}
	window.isCalling = true;
	const checkAvailability = await fetch(`https://echo-land.herokuapp.com/checkAvailability?userName=${username}`);
	const resp = await checkAvailability.json();
	if (resp.status === false) {
		window.isCalling = false;
		return alert(resp.msg);
	}

	const offerOptions: RTCOfferOptions = {
		offerToReceiveAudio: true,
		offerToReceiveVideo: false,
		voiceActivityDetection: false,
	};

	console.log("getting servers");
	const response = await fetch("https://echo-land.herokuapp.com/breakTheIce");
	const data = await response.json();
	window.iceConfig = data.config;
	console.log("server config", data.config);
	// const peerConnection = new RTCPeerConnection({ iceServers: data.config.iceServers });
	// console.log("created peer connection", peerConnection);
	const remoteStream = new MediaStream();
	const remoteAudio: any = document.getElementById("audioPlayer");
	remoteAudio.srcObject = remoteStream;

	window.peerConnection.addEventListener("track", async event => {
		// remoteStream.addTrack(event.track, remoteStream);
		remoteStream.addTrack(event.track);
	});
	window.peerConnection.addEventListener("icecandidate", event => {
		console.log("ice candidate event on caller");
		console.log(event.candidate);
		if (event.candidate) {
			window.socket.emit("newIceCandidate", {
				candidate: event.candidate,
				sendTo: username,
			});
			console.log("new ice candidate sent to " + username);
		}
	});
	window.peerConnection.addEventListener("connectionstatechange", event => {
		console.log(event);
		if (window.peerConnection.connectionState === "connected") {
			console.log("peers connected=========================================");
		}
	});
	window.socket.on("callAccepted", async callData => {
		console.log("call got accepted", callData);
		// const remoteDesc = new RTCSessionDescription(callData.answer);
		console.log("answer set in remote desc", callData.answer);
		await window.peerConnection.setRemoteDescription(callData.answer);
		console.log("remote desc set");
	});
	console.log("getting user media");
	const localStream = await getUserMedia();
	console.log("got user media");
	// const audioTracks = localStream.getAudioTracks();
	localStream.getTracks().forEach(track => window.peerConnection.addTrack(track, localStream));
	console.log("Adding Local Stream to peer connection");
	const offer = await window.peerConnection.createOffer(offerOptions);
	console.log("offer created", offer);
	await window.peerConnection.setLocalDescription(offer);
	console.log("local description set");
	window.socket.emit("connectCall", {
		offer,
		callTo: username,
		callFrom: window.userName,
	});
	console.log("offer send to user");
	window.socket.on("incomingIceCandidate", async data => {
		console.log("incoming call ice candidate", data);
		await window.peerConnection.addIceCandidate(data.candidate);
	});
};

// async function setNameAsCaller(name) {
// 	document.getElementById("callTo").value = name;
// }

window.endCall = async function endCall() {
	// window.location.reload();
};

window.init = function init() {
	window.connected = false;
	window.gotUserMedia = false;
	window.userStream;
	var x = document.createElement("AUDIO");
	x.style.display = "none";
	x.id = "audioPlayer";
	x.setAttribute("autoplay", "true");
	document.body.appendChild(x);
};

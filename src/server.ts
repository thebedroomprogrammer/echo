import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import * as socketIO from "socket.io";
import * as twilio from "twilio";
import { TWILIO_SID, TWILIO_AUTH_TOKEN } from "./constants";
const app = express();
const server = http.createServer(app);
const twilioClient = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

app.use(bodyParser.json());

server.listen(process.env.PORT || 3000);
const io = socketIO(server);

let users: { socketId: string; userName: string; link?: string }[] = [];

const getIceServerConfig = async () => {
	const iceServerConfig = await twilioClient.tokens.create();
	return iceServerConfig;
};
const createUser = (socket: SocketIO.Socket) => {
	return {
		userName: socket.handshake.query.userName,
		socketId: socket.id,
	};
};

const getUser = userName => {
	return users.filter(user => user.userName === userName)[0];
};

const getUserBySocket = id => {
	return users.filter(user => user.socketId === id)[0];
};

setInterval(() => {
	try {
		for (let user of users) {
			io.to(user.socketId).emit("userList", { users });
		}
	} catch (err) {
		console.log(err);
	}
}, 2000);

io.on("connection", function(socket: SocketIO.Socket) {
	console.log("connecting user");
	users.push(createUser(socket));
	console.log(users);

	socket.on("peersConnected", function(data) {
		users = users.map(user => {
			if (data.caller === user.userName) {
				return { ...user, link: data.callee };
			}
			if (data.callee === user.userName) {
				return { ...user, link: data.caller };
			}
			return user;
		});
		console.log(users);
	});
	socket.on("disconnect", function() {
		const disconnectedUser = getUserBySocket(socket.id);

		console.log(disconnectedUser);
		if (disconnectedUser && disconnectedUser.link) {
			const connectedUser = getUser(disconnectedUser.link);
			if (connectedUser) {
				io.to(connectedUser.socketId).emit("callEnded", {});
			}
		}
		users = users.filter(user => user.socketId !== socket.id);
		console.log("user got disconnected");
	});

	socket.on("connectCall", function(data) {
		const callTo = data.callTo;
		const userToCall = getUser(callTo);
		if (userToCall) {
			io.to(userToCall.socketId).emit("incomingCall", data);
		} else {
			io.to(socket.id).emit("userOut", {});
		}
	});

	socket.on("answerIncomingCall", function(data) {
		const answerTo = data.answerTo;
		const userToSendTheAnswer = getUser(answerTo);
		if (userToSendTheAnswer) {
			io.to(userToSendTheAnswer.socketId).emit("callAccepted", data);
		} else {
			io.to(socket.id).emit("userOut", {});
		}
	});

	socket.on("newIceCandidate", data => {
		const sendToUser = getUser(data.sendTo);
		if (sendToUser) {
			io.to(sendToUser.socketId).emit("incomingIceCandidate", data);
		} else {
			io.to(socket.id).emit("userOut", {});
		}
	});
});

app.get("/", function(_, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/checkAvailability", function(req, res) {
	const userName = req.query.userName;
	const user = getUser(userName);
	if (!user) {
		return res.send({ status: false, msg: "user not present" });
	} else if (user.link) {
		return res.send({ status: false, msg: "user busy" });
	} else {
		return res.send({ status: true });
	}
});

app.get("/breakTheIce", async function(_, res) {
	res.send({ config: await getIceServerConfig() });
});

app.get("/connect", function(req, res) {
	if (!users.some(user => user.userName === req.query.userName)) {
		return res.send({ status: true });
	}
	return res.send({ status: false });
});

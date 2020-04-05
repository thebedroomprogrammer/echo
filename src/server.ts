import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import * as socketIO from "socket.io";
import * as cors from "cors";
import * as twilio from "twilio";
import * as uuid from "uuid";

import { TWILIO_SID, TWILIO_AUTH_TOKEN } from "./constants";
const app = express();
const server = http.createServer(app);

const twilioClient = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

app.use(bodyParser.json());

app.use(cors());

server.listen(process.env.PORT || 2906);

const io = socketIO(server);

let users = [];

const getIceServerConfig = async () => {
	const iceServerConfig = await twilioClient.tokens.create();
	const config = {
		accountSid: iceServerConfig.accountSid,
		dateCreated: iceServerConfig.dateCreated,
		dateUpdated: iceServerConfig.dateUpdated,
		iceServers: iceServerConfig.iceServers.filter(server => server["url"].match("stun")),
		// iceServers: iceServerConfig.iceServers,
		password: iceServerConfig.password,
		ttl: iceServerConfig.ttl,
		username: iceServerConfig.username,
	};
	return config;
};

io.on("connection", function(socket: SocketIO.Socket) {
	const ROOM_KEY = socket.handshake.query.key;
	const NAME = socket.handshake.query.name;
	users.push(NAME);
	socket.join(ROOM_KEY);

	socket.on("disconnect", function() {
		users = users.filter(name => name !== NAME);
		socket.to(ROOM_KEY).emit("peerDisconnect", { name: NAME, id: socket.id });
	});

	socket.on("callConnected", function() {
		console.log("callConnected");
	});

	socket.emit("ready");

	socket.on("fetchPeers", function() {
		socket.to(ROOM_KEY).emit("onFetchingPeer", { name: NAME, id: socket.id });
	});

	socket.on("leavingRoom", function() {
		users = users.filter(name => name !== NAME);
		socket.to(ROOM_KEY).emit("onLeavingRoom", { name: NAME });
	});

	socket.on("peerFetched", function(data) {
		io.to(data.id).emit("onPeerFetched", { name: NAME, id: socket.id, offer: data.offer });
	});

	socket.on("sendingAnswer", function(data) {
		io.to(data.id).emit("receivingAnswer", { id: socket.id, answer: data.answer, name: NAME });
	});

	socket.on("sendIceCandidate", function(data) {
		io.to(data.id).emit("receiveIceCandidate", { name: NAME, id: socket.id, candidate: data.candidate });
	});
});

app.get("/breakTheIce", async function(_, res) {
	res.send({ success: true, config: await getIceServerConfig() });
});

app.get("/", function(_, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/talk/:username/:roomId", function(req, res) {
	if (
		req.params.username &&
		req.params.username.length > 0 &&
		req.params.username.length < 10 &&
		req.params.roomId &&
		req.params.roomId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i) &&
		users.indexOf(req.params.username)
	) {
		return res.sendFile(__dirname + "/index.html");
	} else {
		return res.redirect("/");
	}
});

app.get("/sdk.js", function(_, res) {
	res.sendFile(__dirname + "/sdk.js");
});

app.get("/app.js", function(_, res) {
	res.sendFile(__dirname + "/app.js");
});

app.get("/createRoom", (_, res) => {
	res.send({ success: true, roomId: uuid() });
});

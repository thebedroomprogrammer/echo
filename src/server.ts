import express from "express";
import http from "http";
import bodyParser from "body-parser";
import socketIO from "socket.io";
import twilio from "twilio";
import { TWILIO_SID } from "./constants";
import { TWILIO_AUTH_TOKEN } from "./constants";
const app = express();
const server = http.createServer(app);
const twilioClient = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

app.use(bodyParser.json());

server.listen(process.env.PORT);
const io = socketIO(server);

let users: { socketId: string; userName: string }[] = [];

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

io.on("connection", function(socket: SocketIO.Socket) {
	console.log("connecting user");
	users.push(createUser(socket));
	console.log(users);

	socket.on("disconnect", function() {
		users = users.filter(user => user.socketId !== socket.id);
		console.log("user disconnected");
		console.log(users);
	});

	socket.on("connectCall", function(data) {
		const callTo = data.callTo;
		const userToCall = getUser(callTo);
		io.to(userToCall.socketId).emit("incomingCall", data);
	});

	socket.on("answerIncomingCall", function(data) {
		const answerTo = data.answerTo;
		const userToSendTheAnswer = getUser(answerTo);
		io.to(userToSendTheAnswer.socketId).emit("callAccepted", data);
	});

	socket.on("newIceCandidate", data => {
		const sendToUser = getUser(data.sendTo);
		io.to(sendToUser.socketId).emit("incomingIceCandidate", data);
	});
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/breakTheIce", async function(req, res) {
	res.send({ config: await getIceServerConfig() });
});

app.get("/connect", function(req, res) {
	if (!users.some(user => user.userName === req.query.userName)) {
		return res.send({ status: true });
	}
	return res.send({ status: false });
});

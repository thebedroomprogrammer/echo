import express from "express";
import http from "http";
import bodyParser from "body-parser";
import socketIO from "socket.io";
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());

server.listen(3000);
const io = socketIO(server);

let users: { socketId: string; userName: string }[] = [];

const createUser = (socket: SocketIO.Socket) => {
	return {
		userName: socket.handshake.query.userName,
		socketId: socket.id,
	};
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
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/connect", function(req, res) {
	if (!users.some(user => user.userName === req.query.userName)) {
		return res.send({ status: true });
	}
	return res.send({ status: false });
});

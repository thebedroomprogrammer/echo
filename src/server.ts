import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import * as socketIO from "socket.io";
import * as cors from "cors";
import * as twilio from "twilio";
import { TWILIO_SID, TWILIO_AUTH_TOKEN } from "./constants";
const app = express();
const server = http.createServer(app);

const twilioClient = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

app.use(bodyParser.json());

app.use(cors());

// import * as Redis from "ioredis";

// const redis = new Redis(REDIS_CONFIG);

server.listen(process.env.PORT || 3246);

const io = socketIO(server);

const getIceServerConfig = async () => {
	const iceServerConfig = await twilioClient.tokens.create();
	const config = {
		accountSid: iceServerConfig.accountSid,
		dateCreated: iceServerConfig.dateCreated,
		dateUpdated: iceServerConfig.dateUpdated,
		iceServers: iceServerConfig.iceServers.filter(server => server["url"].match("stun")),
		password: iceServerConfig.password,
		ttl: iceServerConfig.ttl,
		username: iceServerConfig.username,
	};
	return config;
};

io.on("connection", function(socket: SocketIO.Socket) {
	const ROOM_KEY = socket.handshake.query.key;
	// const STATE_KEY = REDIS_KEY_PREFIX + socket.handshake.query.key;
	socket.join(ROOM_KEY);
	console.log("connecting user");
	// redis.set(STATE_KEY, "0", "ex", 3600);

	socket.on("disconnect", function() {
		// redis.set(STATE_KEY, "0", "ex", 3600);
	});

	socket.on("peersConnected", function() {
		// redis.set(STATE_KEY, "1", "ex", 3600);
	});

	socket.on("connectCall", function(data) {
		socket.to(ROOM_KEY).emit("incomingCall", data);
	});

	socket.on("answerIncomingCall", async function(data) {
		socket.to(ROOM_KEY).emit("callAccepted", data);
	});

	socket.on("newIceCandidate", async data => {
		socket.to(ROOM_KEY).emit("incomingIceCandidate", data);
	});
});

app.get("/callStatus", async function(req, res) {
	// const status = await redis.get(req.query.id);
	// res.send({ success: true, callStatus: parseInt(status) });
	res.send({ success: true, callStatus: 0 });
});

app.get("/breakTheIce", async function(_, res) {
	res.send({ success: true, config: await getIceServerConfig() });
});

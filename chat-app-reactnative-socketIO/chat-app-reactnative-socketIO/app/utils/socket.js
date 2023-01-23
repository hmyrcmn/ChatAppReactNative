import { io } from "socket.io-client";
const socket = io.connect("http://192.168.137.1:4000");
export default socket;

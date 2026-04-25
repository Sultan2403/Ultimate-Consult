const { Server } = require("socket.io");

let io;

function initSocket(server) {
  io = new Server(server, {
    cors: { origin: "http://localhost:5000" },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("subscribe", ({ accessToken }) => {
      socket.join(accessToken);
      console.log(`Socket joined room ${accessToken}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
}

function getIO() {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
}

module.exports = { initSocket, getIO };
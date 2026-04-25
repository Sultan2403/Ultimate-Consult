const { Server } = require("socket.io");

let io;

function initSocket(server) {
  io = new Server(server, {
    cors: { origin: "http://localhost:5173" }, // Keep this synced with your CORS config!
  });

  // LOG: Signal that the WebSocket server is active
  console.log("✅ Socket.io: Initialized and listening for connections");

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("subscribe", ({ accessToken }) => {
      socket.join(accessToken);
      console.log(`Socket ${socket.id} joined room: ${accessToken}`);
    });

    socket.on("disconnect", (reason) => {
      console.log(`Client disconnected (${socket.id}). Reason: ${reason}`);
    });
  });

  return io;
}

function getIO() {
  if (!io) {
    throw new Error("❌ Socket.io not initialized!");
  }
  return io;
}

module.exports = { initSocket, getIO };

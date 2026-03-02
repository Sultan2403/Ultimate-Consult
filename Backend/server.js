require("dotenv").config();
const { initSocket, getIO } = require("./Utils/sockets");

const app = require("./app");
const http = require("http");
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
initSocket(server);


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

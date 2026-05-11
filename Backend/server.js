require("dotenv").config();
const { initSocket } = require("./Utils/Connections/sockets");

const app = require("./app");
const http = require("http");
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

initSocket(server);

require("./Utils/Workers/notification.worker"); // Start the notification worker
// This also starts redis and bullmq as seperate processes

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const redisInstance = require("../DB/Connections/redis");
const { Queue } = require("bullmq");
const { QUEUES } = require("../Config/constants");

const adminNotificationQueue = new Queue(QUEUES.NOTIFICATIONS, {
  connection: redisInstance,
});

module.exports = { adminNotificationQueue };

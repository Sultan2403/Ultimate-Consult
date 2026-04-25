const redisInstance = require("../DB/Connections/redis");
const { Queue } = require("bullmq");
const { QUEUE_NAMES } = require("../Config/constants");

const adminNotificationQueue = new Queue(QUEUE_NAMES.ADMIN_NOTIFICATION, {
  connection: redisInstance,
});

module.exports = { adminNotificationQueue };

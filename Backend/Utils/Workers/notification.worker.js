const { Worker } = require("bullmq");
const redisInstance = require("../../DB/Connections/redis");
const { QUEUES, JOBS } = require("../../Config/constants");
const { sendNotificationEmail } = require("../../Services/emails.service");

const notificationsWorker = new Worker(
  QUEUES.NOTIFICATIONS,
  async (job) => {
    console.log("Processing job:", job.id, "with data:", job.data);

    switch (job.name) {
      case JOBS.NOTIFICATIONS.ADMIN_NEW_CONSULT:
        const { customerData } = job.data;
        await sendNotificationEmail({ consultationDetails: customerData });
        break;
      default:
        console.warn("Unknown job type:", job.name);
    }
  },
  { connection: redisInstance, concurrency: 5 },
);

// notificationsWorker.on("ready", () => {
//   console.log("✅ Notifications worker is connected and listening to Redis");
// });

notificationsWorker.on("failed", (job, err) => {
  console.error(`❌ Notification job ${job.id} failed:`, err.message);
});

notificationsWorker.on("completed", (job) => {
  console.log(
    `🎉 Job ${job.id} COMPLETED: Email sent to ${job.data.customerData.email}`,
  );
});

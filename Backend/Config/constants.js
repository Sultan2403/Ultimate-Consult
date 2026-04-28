const REDIS_CONFIG = {
  HOST: process.env.REDIS_HOST || "localhost",
  PORT: process.env.REDIS_PORT || 6379,
};

console.log(REDIS_CONFIG.HOST);

const QUEUES = {
  NOTIFICATIONS: "notifications_queue",
};

const JOBS = {
  NOTIFICATIONS: {
    // Admin specific
    ADMIN_NEW_CONSULT: "job_admin_new_consultation",
  },
};

module.exports = { REDIS_CONFIG, QUEUES, JOBS };

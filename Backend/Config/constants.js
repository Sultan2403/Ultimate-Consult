const REDIS_CONFIG = {
    HOST: process.env.REDIS_HOST || "localhost",
    PORT: process.env.REDIS_PORT || 6379
}

const QUEUE_NAMES = {
    ADMIN_NOTIFICATION: "admin_notification"
}

module.exports = { REDIS_CONFIG, QUEUE_NAMES }
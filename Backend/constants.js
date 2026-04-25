const REDIS_CONFIG = {
    HOST: process.env.REDIS_HOST || "localhost",
    PORT: process.env.REDIS_PORT || 6379
}

module.exports = { REDIS_CONFIG }
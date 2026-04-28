const Redis = require("ioredis");
const { REDIS_CONFIG } = require("../../Config/constants");

// Create the live instance
const redis = new Redis(process.env.REDIS_URL);

redis.on("connect", () => console.log("✅ Redis Connected"));
redis.on("error", (err) => console.error("❌ Redis Connection Error:", err, err?.message));

module.exports = redis;

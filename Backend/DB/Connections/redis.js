const Redis = require("ioredis");
const { REDIS_CONFIG } = require("../../Config/constants");

// Create the live instance
const redis = new Redis({
  host: REDIS_CONFIG.HOST,
  port: REDIS_CONFIG.PORT,
  maxRetriesPerRequest: null,
});

redis.on("connect", () => console.log("✅ Redis Connected"));
redis.on("error", (err) => console.error("❌ Redis Connection Error:", err));

module.exports = redis;

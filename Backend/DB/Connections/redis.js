const Redis = require("ioredis");
const { REDIS_CONFIG } = require("../../constants");

// Create the live instance
const redis = new Redis({
  host: REDIS_CONFIG.HOST,
  port: REDIS_CONFIG.PORT,
  maxRetriesPerRequest: 10,
});

redis.on("connect", () => console.log("✅ Redis Connected"));
redis.on("error", (err) => console.error("❌ Redis Connection Error:", err));

module.exports = redis;

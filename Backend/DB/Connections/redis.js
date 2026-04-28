const Redis = require("ioredis");
const { REDIS_CONFIG } = require("../../Config/constants");

// Create the live instance
const redis = new Redis({
  host: REDIS_CONFIG.HOST,
  port: REDIS_CONFIG.PORT,
  maxRetriesPerRequest: null,
});

let error = false;

redis.on("connect", () => console.log("✅ Redis Connected"));
redis.on("error", (err) => {
  error = true;
  console.error("❌ Redis Connection Error:", err);
  if (error) process.exit(1);
});

module.exports = redis;

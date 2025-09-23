const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

client.connect()
  .then(() => console.log('Connected to Redis'))
  .catch(err => console.log('Redis connection error: ', err));

const setCache = async (key, value, ttl = 3600) => {
  await client.set(key, JSON.stringify(value), { EX: ttl });
};

const getCache = async (key) => {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
};

module.exports = { setCache, getCache };

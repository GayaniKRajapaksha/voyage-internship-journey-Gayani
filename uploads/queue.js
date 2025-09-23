const Queue = require('bull');
const emailQueue = new Queue('email', { redis: { host: process.env.REDIS_HOST } });

module.exports = { emailQueue };

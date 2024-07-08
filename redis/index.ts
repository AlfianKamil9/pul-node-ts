const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
  password: '123456',
});

const getAsync = promisify(client).bind(client);
const setAsync = promisify(client).bind(client);

client.on('error', function (err: Error) {
  console.error('Redis error:', err);
});

module.exports = {
  client,
  getAsync,
  setAsync,
};

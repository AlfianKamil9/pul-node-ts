import { createClient } from 'redis';
import { promisify } from 'util';

// Create Redis client
const password = 'a9_d:zgrQ4HGL.d';
const client = createClient({
  url: `redis://redis:123456@127.0.0.1:6379`,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Promisify the get and set methods
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.connect().catch(console.error);

export default { client, getAsync, setAsync };

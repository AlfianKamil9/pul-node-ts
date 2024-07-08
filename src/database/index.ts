import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: '127.0.0.1',
  port: 5432,
  database: 'postgree',
});

pool.on('connect', () => {
  console.log('Connected to Postgres');
});

export default pool;

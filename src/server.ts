import app from './app';
import dotenv from 'dotenv';
import pool from './database/index';

dotenv.config();

const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST || '0.0.0.0';
const error = Error;

const ServerStart = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${HOST}:${PORT}`);
    });
    await pool.connect();
  } catch (error) {
    const err = error as Error;
    console.log(`Failed to start server: ${err.message}`);
    process.exit(1);
  }
};

ServerStart();

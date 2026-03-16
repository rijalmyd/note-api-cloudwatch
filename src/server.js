import express from 'express';
import notes from './api/notes/routes.js';
import dotenv, { config } from 'dotenv';

dotenv.config();

import loggingMiddleware from './logger/middleware.js';

const app = express();
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : process.env.HOST;
const port = process.env.PORT || 3000;

app.use(loggingMiddleware);
app.use(express.json());
app.use('/', notes);

app.listen(port, host, () => {
  console.log(`server start at http://${host}:${port}`);
});
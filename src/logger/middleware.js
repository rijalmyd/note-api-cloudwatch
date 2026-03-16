import 'dotenv/config';
import logger from './index.js';
import os from 'os';

const loggingMiddleware = (req, res, next) => {
  res.on('finish', () => {
    const userIP = req.ip || req.connection.remoteAddress;
    const payload = res.req.body ? res.req.body : res.req.params || null;
    
    console.log(process.env.LOG_GROUP_NAME, process.env.LOG_STREAM_NAME);
    logger.info(`userIP=${userIP}, host=${os.hostname()}, method=${req.method}, path=${req.path}, payload=${JSON.stringify(payload)}`);
  });
  next();
};

export default loggingMiddleware;
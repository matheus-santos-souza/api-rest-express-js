import express from 'express';
import http from 'http';
import cors from 'cors';
import { router } from './routes';
import { apiKeyMiddleware } from './middlewares/apiKeyMiddleware';
import { authenticate } from './middlewares/authenticateMiddleware';

const app = express();

const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

// Middlewares
app.use('/api', apiKeyMiddleware);
app.use('/api/jwt', authenticate);

app.use(router);

export { httpServer };

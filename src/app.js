import express from 'express';
import http from 'http';
import cors from 'cors';
import { router as userRoutes } from './routes/public/userRoutes';
import { router as userPrivateRoutes } from './routes/private/userPrivateRoutes';
import { router as profilePrivateRoutes } from './routes/private/profilePrivateRoutes';
import { router as photoPrivateRoutes } from './routes/private/photoPrivateRoutes';
import { apiKeyMiddleware } from './middlewares/apiKeyMiddleware';
import { authenticate } from './middlewares/authenticateMiddleware';

const app = express();

const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Middlewares
app.use('/api', apiKeyMiddleware);
app.use('/api/jwt', authenticate);

// Routes Publics
app.use(userRoutes);

// Routes Private
app.use(userPrivateRoutes);
app.use(profilePrivateRoutes);
app.use(photoPrivateRoutes);

export { httpServer };

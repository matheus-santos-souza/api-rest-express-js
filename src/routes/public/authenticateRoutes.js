import { Router } from 'express';
import { AuthenticateUserController } from '../../controllers/AuthenticateUserController';

const router = Router();

// User
router.post('/api/signin', new AuthenticateUserController().signin);

export { router };

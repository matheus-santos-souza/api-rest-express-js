import { Router } from 'express';
import { UserController } from '../../controllers/UserController';

const router = Router();

// User
router.post('/api/signup', new UserController().store);

export { router };

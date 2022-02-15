import { Router } from 'express';
import { UserController } from '../../controllers/UserController';

const router = Router();

// User
// router.get('/api/jwt/user', new UserController());
router.post('/api/jwt/user', new UserController().store);
router.delete('/api/jwt/user', new UserController().destroy);

export { router };

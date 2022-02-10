import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

router.get('/api', (req, res) => res.send({ hellowolrd: true }));

router.post('/api/signup', new UserController().store);
router.post('/api/signin', new AuthenticateUserController().signin);

// exemplo rota privada '/api/jwt/
router.get('/api/jwt/profile', (req, res) => res.send({ profile: true }));

export { router };

import { Router } from 'express';
import { UserController } from '../../controllers/UserController';

const router = Router();

router.get('/api', (req, res) => res.json({ Hello: 'word' }));

// User
router.post('/api/signup', new UserController().store);

export { router };

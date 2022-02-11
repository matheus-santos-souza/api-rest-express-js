import { Router } from 'express';
import { ProfileController } from '../../controllers/ProfileController';

const router = Router();

// Profile
router.get('/api/jwt/profile', new ProfileController().index);
router.post('/api/jwt/profile', new ProfileController().storeOrUpdate);
router.delete('/api/jwt/profile', new ProfileController().destroy);

export { router };

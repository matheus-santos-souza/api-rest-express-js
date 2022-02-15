import { Router } from 'express';
import { PhotoController } from '../../controllers/PhotoController';

const router = Router();

// Photo
router.get('/api/jwt/photo', new PhotoController().index);
router.post('/api/jwt/photo', new PhotoController().storeOrUpdate);
router.delete('/api/jwt/photo', new PhotoController().destroy);

export { router };

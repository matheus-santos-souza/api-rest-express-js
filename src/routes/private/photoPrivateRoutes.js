import { Router } from 'express';
import { PhotoController } from '../../controllers/PhotoController';

const router = Router();

// Photo
router.get('/api/jwt/photo', (req, res) => res.send({ photo: true }));
router.post('/api/jwt/photo', new PhotoController().storeOrUpdate);
router.delete('/api/jwt/photo', (req, res) => res.send({ photo: true }));

export { router };

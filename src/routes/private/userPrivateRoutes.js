import { Router } from 'express';
// import { UserController } from '../../controllers/UserController';

const router = Router();

// User
router.get('/api/jwt/user', (req, res) => console.log(res.json({ hello: 'wolrd' })));
router.put('/api/jwt/user', (req, res) => console.log(res.json({ hello: 'wolrd' })));
router.delete('/api/jwt/user', (req, res) => console.log(res.json({ hello: 'wolrd' })));

export { router };

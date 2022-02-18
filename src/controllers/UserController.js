import { UserModel } from '../models/UserModel';

class UserController {
  async store(req, res) {
    try {
      const userModel = new UserModel();

      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          status: 400,
          message: 'invalid.data',
        });
      }

      const user = await userModel.create(req.body, res);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        error: 'email.already.exists',
      });
    }
  }

  async destroy(req, res) {
    try {
      const userModel = new UserModel();

      await userModel.delete(req.userId.sub);

      return res.json({ message: 'success.destroy.user' });
    } catch (error) {
      return res.status(400).json({
        error: 'failed.destroy.user',
      });
    }
  }
}

export { UserController };

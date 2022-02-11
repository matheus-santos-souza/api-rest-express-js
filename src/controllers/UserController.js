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

      const user = await userModel.create(req.body);

      return res.json(user);
    } catch (error) {
      return res.json({
        error,
        message: error.message,
      });
    }
  }
}

export { UserController };

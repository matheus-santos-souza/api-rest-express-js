import { AuthenticateUserModel } from '../models/AuthenticateUserModel';

class AuthenticateUserController {
  async signin(req, res) {
    const authenticate = new AuthenticateUserModel();

    try {
      const loginResult = await authenticate.login(req.body);
      return res.json(loginResult);
    } catch (error) {
      return res.json({
        error,
        message: error.message,
      });
    }
  }
}

export { AuthenticateUserController };

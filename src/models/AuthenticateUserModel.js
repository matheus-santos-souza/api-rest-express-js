import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prismaClient } from '../prisma';

class AuthenticateUserModel {
  async login({ email, password }) {
    const userFind = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!bcrypt.compareSync(password, userFind.password)) {
      return false;
    }

    const token = sign(
      {
        user: {
          id: userFind.id,
          name: userFind.name,
          email: userFind.email,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: userFind.id,
        expiresIn: '1d',
      },
    );

    const user = { ...userFind };
    delete user.password;

    return { user, token };
  }
}

export { AuthenticateUserModel };

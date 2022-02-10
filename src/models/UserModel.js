import bcrypit from 'bcryptjs';
import { prismaClient } from '../prisma';

class UserModel {
  async create(user) {
    const userCopy = { ...user };
    const { password } = userCopy;

    const salt = bcrypit.genSaltSync();
    // eslint-disable-next-line no-param-reassign
    userCopy.password = bcrypit.hashSync(password, salt);

    const userInstance = await prismaClient.user.create({ data: userCopy });

    const userCopyResult = { ...userInstance };

    delete userCopyResult.password;

    return userCopyResult;
  }
}

export { UserModel };

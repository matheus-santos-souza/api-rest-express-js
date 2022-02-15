import bcrypit from 'bcryptjs';
import { prismaClient } from '../prisma';
import { PhotoModel } from './PhotoModel';

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

  async delete(id) {
    const photoModel = new PhotoModel();

    const findPhoto = await prismaClient.photo.findFirst({
      where: {
        profileId: id,
      },
    });

    if (findPhoto) {
      photoModel.fsRemove(findPhoto.key);
    }

    const user = await prismaClient.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}

export { UserModel };

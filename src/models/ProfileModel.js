import { prismaClient } from '../prisma';
import { PhotoModel } from './PhotoModel';

class ProfileModel {
  async createOrUpdate(id, body) {
    const upsertProfile = await prismaClient.profile.upsert({
      where: {
        userId: id,
      },
      update: body,
      create: {
        userId: id,
        ...body,
      },
    });

    return upsertProfile;
  }

  async findProfile(id) {
    const profile = await prismaClient.profile.findFirst({
      where: {
        userId: id,
      },
      include: {
        Photo: true,
        user: true,
      },
    });

    if (profile) {
      const copyProfile = { ...profile };
      delete copyProfile.user.password;
      return copyProfile;
    }

    return profile;
  }

  async delete(id) {
    const photoModel = new PhotoModel();

    const profile = await prismaClient.profile.delete({
      where: {
        userId: id,
      },
      include: {
        Photo: true,
      },
    });

    if (profile.Photo) {
      photoModel.fsRemove(profile.Photo.key);
    }

    return profile;
  }
}

export { ProfileModel };

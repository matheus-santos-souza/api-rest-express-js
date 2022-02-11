import { prismaClient } from '../prisma';

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
    const profile = await prismaClient.profile.findMany({
      where: {
        userId: id,
      },
      include: {
        Photo: true,
        user: true,
      },
    });

    const copyProfile = { ...profile[0] };
    delete copyProfile.user.password;

    return copyProfile;
  }

  async delete(id) {
    const profile = await prismaClient.profile.delete({
      where: {
        userId: id,
      },
    });

    return profile;
  }
}

export { ProfileModel };

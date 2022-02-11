/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-shadow */
import fs from 'fs';
import { resolve } from 'path';
import { prismaClient } from '../prisma';

class PhotoModel {
  async createOrUpdate(id, { originalname, size, filename }) {
    const promise = new Promise(async (resolve, reject) => {
      const findPhoto = await prismaClient.photo.findFirst({
        where: {
          profileId: id,
        },
      });

      if (findPhoto) {
        resolve(findPhoto.key);
      } else {
        reject();
      }
    });

    const resultPromise = promise.then((key) => {
      const filePath = resolve(__dirname, '..', '..', 'uploads', 'img', 'profile', key);
      fs.unlinkSync(filePath);
    }).then(async () => {
      const photoResult = await this.createOrUpdatePhoto(id, originalname, size, filename);
      return photoResult;
    }, async () => {
      const photoResult = await this.createOrUpdatePhoto(id, originalname, size, filename);
      return photoResult;
    });

    return resultPromise;
  }

  async createOrUpdatePhoto(id, originalname, size, filename) {
    const photo = await prismaClient.photo.upsert({
      where: {
        profileId: id,
      },
      update: {
        filename: originalname,
        key: filename,
        size,
        url: '',
      },
      create: {
        profileId: id,
        filename: originalname,
        key: filename,
        size,
        url: '',
      },
    });

    return photo;
  }

  async verifyIsProfile(id) {
    const profile = await prismaClient.profile.findUnique({
      where: {
        userId: id,
      },
    });

    if (!profile) {
      return false;
    }

    return true;
  }
}

export { PhotoModel };

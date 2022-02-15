/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-async-promise-executor */
/* eslint-disable no-shadow */
import fs from 'fs';
import { resolve, basename } from 'path';
import { prismaClient } from '../prisma';
import 'dotenv/config';

class PhotoModel {
  async createOrUpdate(id, { originalname, size, filename }) {
    const promise = new Promise(async (resolve, reject) => {
      const findProfile = await prismaClient.profile.findFirst({
        where: {
          userId: id,
        },
        include: {
          Photo: true,
        },
      });

      if (findProfile && findProfile.Photo) {
        resolve(findProfile.Photo.key);
      } if (findProfile && !findProfile.Photo) {
        reject();
      }
    });

    const resultPromise = promise.then(async (key) => {
      this.fsRemove(key);
      const photoResult = await this.createOrUpdatePhoto(id, originalname, size, filename);
      return photoResult;
    }, async () => {
      const photoResult = await this.createOrUpdatePhoto(id, originalname, size, filename);
      return photoResult;
    });

    return resultPromise;
  }

  async delete(id) {
    const photo = await prismaClient.photo.delete({
      where: {
        profileId: id,
      },
    });

    this.fsRemove(photo.key);
    return (photo);
  }

  async findPhoto(id) {
    const photo = await prismaClient.photo.findFirst({
      where: {
        profileId: id,
      },
    });

    return photo;
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
        url: `${process.env.URL_API}/${basename(resolve('..', 'uploads', 'img'))}/${basename(resolve('..', 'uploads', 'img', 'profile'))}/${filename}`,
      },
      create: {
        profileId: id,
        filename: originalname,
        key: filename,
        size,
        url: `${process.env.URL_API}/${basename(resolve('..', 'uploads', 'img'))}/${basename(resolve('..', 'uploads', 'img', 'profile'))}/${filename}`,
      },
    });

    return photo;
  }

  fsRemove(key) {
    const filePath = resolve(__dirname, '..', '..', 'uploads', 'img', 'profile', key);
    fs.unlinkSync(filePath);
    return true;
  }
}

export { PhotoModel };

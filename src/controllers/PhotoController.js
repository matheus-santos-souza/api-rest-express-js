import multer from 'multer';
import { PhotoModel } from '../models/PhotoModel';
import { ProfileModel } from '../models/ProfileModel';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  async index(req, res) {
    try {
      const photoModel = new PhotoModel();
      const photo = await photoModel.findPhoto(req.userId.sub);

      if (!photo) {
        return res.status(400).json({
          error: 'photo.noExists',
        });
      }

      return res.json(photo);
    } catch (error) {
      return res.status(400).json({
        error: 'failed.search.photo',
      });
    }
  }

  async storeOrUpdate(req, res) {
    try {
      const profile = new ProfileModel();
      const profileResult = await profile.findProfile(req.userId.sub);

      if (!profileResult) {
        return res.json({ error: 'profile.noExists' });
      }

      return upload(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ errors: [err.code] });
        }
        const photoModel = new PhotoModel();

        const photo = await photoModel.createOrUpdate(req.userId.sub, req.file);

        return res.json(photo);
      });
    } catch (error) {
      return res.json({ error: 'photo.failed' });
    }
  }

  async destroy(req, res) {
    try {
      const photoModel = new PhotoModel();
      await photoModel.delete(req.userId.sub);

      return res.json({ message: 'success.destroy.photo' });
    } catch (error) {
      return res.status(400).json({
        error: 'failed.destroy.photo',
      });
    }
  }
}

export { PhotoController };

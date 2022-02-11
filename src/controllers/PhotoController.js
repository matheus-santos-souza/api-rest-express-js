import multer from 'multer';
import { PhotoModel } from '../models/PhotoModel';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  storeOrUpdate(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }
      const photoModel = new PhotoModel();
      const profile = await photoModel.verifyIsProfile(req.userId.sub);

      if (!profile) {
        return res.status(400).json({
          error: 'failed.create.photo',
        });
      }

      const photo = await photoModel.createOrUpdate(req.userId.sub, req.file);
      // console.log(photo, req.userId.sub, req.file);
      return res.json(photo);
    });
  }
}

export { PhotoController };

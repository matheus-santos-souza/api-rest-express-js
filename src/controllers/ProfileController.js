import { ProfileModel } from '../models/ProfileModel';

class ProfileController {
  async index(req, res) {
    try {
      const profileModel = new ProfileModel();
      const profile = await profileModel.findProfile(req.userId.sub);

      if (!profile) {
        return res.status(400).json({
          error: 'profile.noExists',
        });
      }

      return res.json(profile);
    } catch (error) {
      return res.status(400).json({
        error: 'failed.search.profile',
      });
    }
  }

  async storeOrUpdate(req, res) {
    try {
      const profileModel = new ProfileModel();
      const profile = await profileModel.createOrUpdate(req.userId.sub, req.body);

      return res.json(profile);
    } catch (error) {
      return res.status(400).json({
        error: 'failed.create.profile',
      });
    }
  }

  async destroy(req, res) {
    try {
      const profileModel = new ProfileModel();
      await profileModel.delete(req.userId.sub);

      return res.json({ message: 'success.destroy.profile' });
    } catch (error) {
      return res.status(400).json({
        error: 'failed.destroy.profile',
      });
    }
  }
}

export { ProfileController };

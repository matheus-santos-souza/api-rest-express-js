import 'dotenv/config';

function apiKeyMiddleware(req, res, next) {
  const key = req.query['api-key'];

  if (!key) {
    return next(res.status(401).json({
      status: 401,
      message: 'api-key.required',
    }));
  }

  if (key !== process.env.API_KEY_SECRET) {
    return next(res.status(401).json({
      status: 401,
      message: 'invalid.api-key',
    }));
  }

  req.key = key;
  return next();
}

export { apiKeyMiddleware };

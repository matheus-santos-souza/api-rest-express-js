import { verify } from 'jsonwebtoken';

function authenticate(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      error: 'token.invalid',
    });
  }
  const [, token] = authToken.split(' ');

  try {
    const sub = verify(token, process.env.JWT_SECRET);

    req.userId = sub;

    return next();
  } catch (error) {
    return res.status(401).json({
      error: 'token.expired',
    });
  }
}

export { authenticate };

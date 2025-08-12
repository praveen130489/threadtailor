export function requireAuth(req, res, next) {
  // Placeholder auth; replace with JWT/session later
  const apiKey = req.headers['x-api-key'];
  if (process.env.API_KEY && apiKey === process.env.API_KEY) return next();
  if (!process.env.API_KEY) return next();
  res.status(401).json({ message: 'Unauthorized' });
}
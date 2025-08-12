import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  res.json({ ok: true, token: 'demo-token', user: { email, name: 'Demo User', membershipTier: 'free' } });
});

router.post('/signup', (req, res) => {
  const { email, name } = req.body;
  res.json({ ok: true, token: 'demo-token', user: { email, name, membershipTier: 'free' } });
});

export default router;
import { Router } from 'express';

const router = Router();

const tiers = {
  free: {
    name: 'Free',
    benefits: ['Early access', 'Member-only discounts'],
    price: 0,
  },
  paid: {
    name: 'Premium',
    benefits: ['Exclusive garments', 'Bigger discounts', 'Priority support'],
    price: 999,
  },
};

router.get('/tiers', (req, res) => {
  res.json(tiers);
});

router.post('/upgrade', (req, res) => {
  const { tier } = req.body;
  if (!tiers[tier]) return res.status(400).json({ ok: false, message: 'Invalid tier' });
  res.json({ ok: true, tier });
});

export default router;
import { Router } from 'express';

const router = Router();

router.post('/begin', (req, res) => {
  const { cart } = req.body;
  const eta = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  res.json({ ok: true, step: 1, eta });
});

router.post('/purchase', (req, res) => {
  const { cart, address } = req.body;
  const orderId = Math.random().toString(36).slice(2);
  res.json({ ok: true, orderId, value: cart?.subtotal || 0, address });
});

export default router;
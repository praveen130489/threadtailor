import { Router } from 'express';

const router = Router();

let cart = { items: [], subtotal: 0 };

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/add', (req, res) => {
  const { product, quantity = 1 } = req.body;
  const existing = cart.items.find(i => i.product.slug === product.slug);
  if (existing) existing.quantity += quantity; else cart.items.push({ product, quantity });
  cart.subtotal = cart.items.reduce((sum, i) => sum + i.product.price.value * i.quantity, 0);
  res.json(cart);
});

router.post('/clear', (req, res) => {
  cart = { items: [], subtotal: 0 };
  res.json(cart);
});

export default router;
import { Router } from 'express';

const router = Router();

const categories = [
  { slug: 'products', name: 'Products' },
  { slug: 'promotional-offers', name: 'Promotional Offers' },
  { slug: 'featured', name: 'Featured' },
  { slug: 'celebrity-collections', name: 'Celebrity Collections' },
];

router.get('/', (req, res) => {
  res.json(categories);
});

export default router;
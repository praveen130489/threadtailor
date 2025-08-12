import { Router } from 'express';
import Product from '../models/Product.js';
import { isDatabaseEnabled } from '../config/db.js';

const router = Router();

// Demo data
const demoProducts = [
  {
    slug: 'organic-cotton-tee',
    title: 'Organic Cotton Tee',
    description: 'Breathable, tailored fit. Premium staple.',
    category: 'products',
    images: ['/assets/images/tee1.webp'],
    price: { currency: 'INR', value: 799 },
    bundlePrice: { currency: 'INR', value: 2099 },
    tags: ['organic', 'cotton', 'tailored'],
    rating: 4.6,
    reviewCount: 312,
    quickFacts: [
      { key: 'Material', value: '100% Organic Cotton' },
      { key: 'Fit', value: 'Tailored' },
      { key: 'Care', value: 'Machine wash cold' },
    ],
    variants: [
      { sku: 'OCT-WHT-S', size: 'S', color: 'White', stock: 12 },
      { sku: 'OCT-WHT-M', size: 'M', color: 'White', stock: 4 },
      { sku: 'OCT-WHT-L', size: 'L', color: 'White', stock: 0 },
    ],
  },
  {
    slug: 'aero-tech-joggers',
    title: 'Aero-Tech Joggers',
    description: 'Featherlight, breathable, motion-friendly.',
    category: 'featured',
    images: ['/assets/images/jogger1.webp'],
    price: { currency: 'INR', value: 1499 },
    bundlePrice: { currency: 'INR', value: 3899 },
    tags: ['breathable', 'athleisure'],
    rating: 4.8,
    reviewCount: 198,
    quickFacts: [
      { key: 'Material', value: 'Nylon blend' },
      { key: 'Fit', value: 'Athletic' },
      { key: 'Care', value: 'Hand wash' },
    ],
    variants: [
      { sku: 'ATJ-BLK-M', size: 'M', color: 'Black', stock: 15 },
    ],
    celebrity: 'Ranveer C.'
  }
];

router.get('/', async (req, res) => {
  if (!isDatabaseEnabled()) return res.json(demoProducts);
  const products = await Product.find({}).lean();
  res.json(products);
});

router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  if (!isDatabaseEnabled()) {
    const p = demoProducts.find(d => d.slug === slug);
    if (!p) return res.status(404).json({ message: 'Product not found' });
    return res.json(p);
  }
  const product = await Product.findOne({ slug }).lean();
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

export default router;
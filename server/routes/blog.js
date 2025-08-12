import { Router } from 'express';

const router = Router();

const posts = [
  {
    slug: 'styling-organic-cotton-tees',
    title: 'Styling Organic Cotton Tees',
    excerpt: '3 easy ways to style a classic staple.',
    coverImage: '/assets/images/blog1.webp',
    author: 'Team Thread & Tailor',
    publishedAt: new Date().toISOString(),
  }
];

router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return res.status(404).json({ message: 'Not found' });
  res.json(post);
});

export default router;
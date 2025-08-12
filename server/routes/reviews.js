import { Router } from 'express';

const router = Router();

const demoReviews = {
  'organic-cotton-tee': [
    { userName: 'Aisha', rating: 5, title: 'So breathable!', body: 'Perfect for Mumbai summers.', photos: [] },
    { userName: 'Ravi', rating: 4, title: 'Tailored fit', body: 'Runs slightly small. Size up.', photos: [] },
  ],
};

router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  res.json(demoReviews[slug] || []);
});

export default router;
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { connectToDatabase } from './config/db.js';

import productsRouter from './routes/products.js';
import categoriesRouter from './routes/categories.js';
import cartRouter from './routes/cart.js';
import checkoutRouter from './routes/checkout.js';
import authRouter from './routes/auth.js';
import membershipRouter from './routes/membership.js';
import reviewsRouter from './routes/reviews.js';
import blogRouter from './routes/blog.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FRONTEND_DIR = path.resolve(__dirname, '../frontend');

// Security & Performance
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(compression());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Body Parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Optional DB connection
await connectToDatabase();

// API Routes
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/cart', cartRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/auth', authRouter);
app.use('/api/membership', membershipRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/blog', blogRouter);

// Static Frontend
app.use(express.static(FRONTEND_DIR, { extensions: ['html'] }));

// SPA-like fallback for specific pages
const htmlPages = new Set([
  'index.html', 'product.html', 'category.html', 'cart.html', 'checkout.html',
  'account.html', 'help.html', 'membership.html', 'blog.html', 'landing.html'
]);

app.get('/:page?', (req, res, next) => {
  const page = req.params.page ? `${req.params.page}.html` : 'index.html';
  if (htmlPages.has(page)) {
    return res.sendFile(path.join(FRONTEND_DIR, page));
  }
  next();
});

// 404 + Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Thread & Tailor server running on http://localhost:${PORT}`);
});
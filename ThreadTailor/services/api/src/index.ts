import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Referral capture demo
app.post('/referrals', (req, res) => {
  const { code, source } = req.body || {};
  if (!code) return res.status(400).json({ error: 'code required' });
  return res.json({ ok: true, code, source: source || 'unknown' });
});

// Membership check demo
app.get('/membership/:userId', (req, res) => {
  const tier = (Number(req.params.userId) % 2 === 0) ? 'premium' : 'free';
  res.json({ userId: req.params.userId, tier });
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`api listening on :${port}`));
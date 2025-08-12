import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  excerpt: String,
  body: String,
  coverImage: String,
  tags: [String],
  author: String,
  publishedAt: Date,
}, { timestamps: true });

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
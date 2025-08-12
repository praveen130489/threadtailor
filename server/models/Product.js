import mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema({
  currency: { type: String, default: 'INR' },
  value: { type: Number, required: true },
}, { _id: false });

const VariantSchema = new mongoose.Schema({
  sku: String,
  size: String,
  color: String,
  stock: { type: Number, default: 0 },
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  slug: { type: String, unique: true, index: true },
  title: { type: String, required: true },
  description: String,
  category: { type: String, index: true },
  subcategory: String,
  images: [String],
  price: PriceSchema,
  bundlePrice: PriceSchema,
  tags: [String],
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  quickFacts: [{ key: String, value: String }],
  variants: [VariantSchema],
  celebrity: { type: String },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  userName: String,
  rating: { type: Number, min: 1, max: 5 },
  title: String,
  body: String,
  photos: [String],
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
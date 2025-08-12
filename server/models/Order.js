import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  title: String,
  sku: String,
  quantity: Number,
  price: Number,
}, { _id: false });

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [OrderItemSchema],
  subtotal: Number,
  shipping: Number,
  total: Number,
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered'], default: 'pending' },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
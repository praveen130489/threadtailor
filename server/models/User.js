import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  line1: String,
  line2: String,
  city: String,
  state: String,
  postalCode: String,
  country: { type: String, default: 'IN' },
}, { _id: false });

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true },
  name: String,
  passwordHash: String,
  membershipTier: { type: String, enum: ['free', 'paid'], default: 'free' },
  addresses: [AddressSchema],
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
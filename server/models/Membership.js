import mongoose from 'mongoose';

const MembershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tier: { type: String, enum: ['free', 'paid'], default: 'free' },
  validUntil: Date,
  benefits: [String],
}, { timestamps: true });

export default mongoose.models.Membership || mongoose.model('Membership', MembershipSchema);
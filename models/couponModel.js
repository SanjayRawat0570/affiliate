const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    couponCode: { type: String, required: true, unique: true },
    discountType: { type: String, enum: ['percentage', 'flat'], required: true },
    discountValue: { type: Number, required: true },
    affiliateLink: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    status: { type: Boolean, default: true },
    terms: { type: String },
    minimumPurchaseAmount: { type: Number },
    usageLimit: { type: Number },
    targetAudience: { type: String },
    description: { type: String },
    featured: { type: Boolean, default: false },
    couponType: { type: String },
    startDate: { type: Date },
    maxDiscountCap: { type: Number },
    tags: { type: [String] },
    clickCount: { type: Number, default: 0 },
    usedCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Coupon', couponSchema);

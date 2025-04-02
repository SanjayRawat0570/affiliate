import express from 'express';
import { 
    createCoupon, 
    getAllCoupons, 
    getCouponById, 
    updateCoupon, 
    deleteCoupon 
} from '../controllers/couponController.js';

const router = express.Router();

router.post('/', createCoupon); // Create a new coupon
router.get('/', getAllCoupons); // Get all coupons
router.get('/:id', getCouponById); // Get a single coupon by ID
router.put('/:id', updateCoupon); // Update a coupon by ID
router.delete('/:id', deleteCoupon); // Delete a coupon by ID

export default router;

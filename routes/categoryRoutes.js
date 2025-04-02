import express from 'express';
import { 
  createCategory, 
  getCategories, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
} from '../controllers/categoryController.js';
import {authenticate} from '../middleware/authMiddleware.js';


const router = express.Router();

// Create a new category (Private/Admin)
router.post('/',authenticate, createCategory); // POST /api/categories

// Get all categories (Public)
router.get('/',authenticate, getCategories); // GET /api/categories

// Get single category by ID (Public)
router.get('/:id',authenticate, getCategoryById); // GET /api/categories/:id

// Update category (Private/Admin)
router.put('/:id',authenticate, updateCategory); // PUT /api/categories/:id

// Delete category (Private/Admin)
router.delete('/:id',authenticate, deleteCategory); // DELETE /api/categories/:id

export default router;

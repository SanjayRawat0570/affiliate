import express from 'express';
import { 
  createCategory, 
  getCategories, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
} from '../controllers/categoryController.js';

const router = express.Router();

// Create a new category (Private/Admin)
router.post('/', createCategory); // POST /api/categories

// Get all categories (Public)
router.get('/', getCategories); // GET /api/categories

// Get single category by ID (Public)
router.get('/:id', getCategoryById); // GET /api/categories/:id

// Update category (Private/Admin)
router.put('/:id', updateCategory); // PUT /api/categories/:id

// Delete category (Private/Admin)
router.delete('/:id', deleteCategory); // DELETE /api/categories/:id

export default router;

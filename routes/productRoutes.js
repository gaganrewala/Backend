import express from 'express'
const router = express.Router()

// Controller functions for product routes
import {
  getAllProducts,
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

// Define routes using the router
router.get('/products', getAllProducts);
router.get('/products/:id', getAllProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router
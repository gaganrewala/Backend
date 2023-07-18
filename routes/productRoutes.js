import express from 'express'
const router = express.Router()

// Controller functions for product routes
import {
  getAllProducts,
  // getProductById,
  // createProduct,
  // updateProduct,
  // deleteProduct
} from '../controllers/productController.js';

// Define routes using the router
router.get('/', getAllProducts);
// router.get(':id', getProductById);
// router.post('/products', createProduct);
// router.put('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

export default router
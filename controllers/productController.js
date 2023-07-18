import Product from "../model/productModel.js";
// Controller functions for product routes
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         console.error('Error fetching product:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const createProduct = async (req, res) => {
//     try {
//         const { name, price, description } = req.body;
//         // Create a new product object
//         const newProduct = new Product({
//             name,
//             price,
//             description
//         });

//         // Save the product object to the database
//         await newProduct.save();
//         res.status(201).json({ message: 'Product created successfully' });
//     } catch (error) {
//         console.error('Error creating product:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const updateProduct = async (req, res) => {
//     try {
//         const { name, price, description } = req.body;

//         // Find the product by ID
//         let product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Update the product object
//         product.name = name;
//         product.price = price;
//         product.description = description;

//         // Save the updated product object to the database
//         await product.save();
//         res.status(200).json({ message: 'Product updated successfully' });
//     } catch (error) {
//         console.error('Error updating product:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const deleteProduct = async (req, res) => {
//     try {
//         // Find the product by ID and remove it from the database
//         await Product.findByIdAndRemove(req.params.id);
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting product:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };


export {
    getAllProducts,
}
import Product from "../model/productModel.js";
import { v4 as uuidv4 } from 'uuid';
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const user = await Product.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
// Update a user by ID
const updateProduct = async (req, res) => {
    try {
        const user = await Product.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).json({ error: 'Card not found' });
        }
        user.title = req.body.title || user.title;
        user.description = req.body.description || user.description;
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
// Delete a user by ID
const deleteProduct = async (req, res) => {
    try {
        const user = await Product.findOne({ id: req.params.id });
        const deletedUser = await Product.findByIdAndDelete(user._id);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createProduct = async (req, res) => {
    const thumbnail = 'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
    const { title, description} = req.body;

    try {
        const newUser = new Product({id:uuidv4(), title, description,thumbnail });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export {
    getAllProducts,
    getAllProduct,
    updateProduct,
    deleteProduct,
    createProduct
}
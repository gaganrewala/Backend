// import express from 'express'
// import User from '../model/userModel.js';
// const router = express.Router()

// // GET request to fetch all data
// router.get('/api/user', async (req, res) => {
//     try {
//         const data = await User.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
// // POST request to create new data
// router.post('/api/user', async (req, res) => {
//     try {
//         const newData = req.body; 
//         const createdData = await User.create(newData);
//         res.json(createdData);
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // PUT request to update existing data
// router.put('/api/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updatedData = req.body; 
//         const result = await User.findByIdAndUpdate(id, updatedData, { new: true });
//         res.json(result);
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // DELETE request to delete data
// router.delete('/api/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await User.findByIdAndDelete(id);
//         res.json({ message: 'Data deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
// export default router
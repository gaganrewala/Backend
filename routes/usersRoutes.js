import express from "express";
const router = express.Router()
import  {
    getAllUsers,
    createUser,
    // getUserById,
    // updateUser,
    // deleteUser
} from '../controllers/userController.js';
// Define routes using the router
router.post('/get', getAllUsers);
router.post('/create', createUser);
// router.get('/:id', getUserById);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
export default router
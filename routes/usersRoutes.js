import express from "express";
const router = express.Router()
import  {
    getAllUsers,
    createUser,
} from '../controllers/userController.js';
// router.post('/register', getAllUsers);
router.post('/register', createUser);
router.post('/login', getAllUsers);
export default router

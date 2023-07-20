import express from "express";
const router = express.Router()
import  {
    getAllUsers,
    createUser,
} from '../controllers/userController.js';
router.post('/get', getAllUsers);
router.post('/create', createUser);
export default router
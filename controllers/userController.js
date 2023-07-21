import User from '../model/user1Model.js'
import passport from 'passport';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// User registration
const createUser = async (req, res) => {
    try {
        const { email, password, roleId } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            email,
            password: hashedPassword,
            role: roleId
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// User login
const getAllUsers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' })
        }
        const token = jwt.sign({ userId: user._id }, 'secretKey')
        res.status(200).json({ token,role:user.role })
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

// const getAllUsers = (req, res, next) => {
//     passport.authenticate('local', (err, user, info) => {
//         if (err) {
//             console.error('Error during authentication:', err);
//             return res.status(500).json({ message: 'Server error' });
//         }
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }
//         req.login(user, (err) => {
//             if (err) {
//                 console.error('Error during login:', err);
//                 return res.status(500).json({ message: 'Server error' });
//             }
//             res.status(200).json({ message: 'Login successful' });
//         });
//     })(req, res, next);
// };
export {
    getAllUsers,
    createUser,
}




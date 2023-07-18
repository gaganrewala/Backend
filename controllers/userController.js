import User from '../model/user1Model.js'
import passport from 'passport';
import bcrypt from 'bcrypt'
// Controller functions for user routes
const getAllUsers = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error('Error during authentication:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        req.login(user, (err) => {
            if (err) {
                console.error('Error during login:', err);
                return res.status(500).json({ message: 'Server error' });
            }
            res.status(200).json({ message: 'Login successful' });
        });
    })(req, res, next);
};
// const getAllUsers = async(req, res) => {
//     try {
//         const { email, password } = req.body
//         const user = await User.findOne({email});
//         if (!user) {
//             return res.status(404).json({ error: 'User not found.' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ error: 'Invalid credentials.' });
//         }
//         res.status(200).json({ message: 'Login successful.' });
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };
const createUser = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword)
        // Create a new user object
        const newUser = new User({
            fname,
            lname,
            email,
            password
        });
        newUser.password = hashedPassword
        // Save the user object to the database
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};


// const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         console.error('Error fetching user:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const updateUser = async (req, res) => {
//     try {
//         const { fname,lname, email, password } = req.body;

//         // Find the user by ID
//         let user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Update the user object
//         user.fname = fname;
//         user.lname = lname;
//         user.email = email;
//         user.password = password;

//         // Save the updated user object to the database
//         await user.save();
//         res.status(200).json({ message: 'User updated successfully' });
//     } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const deleteUser = async (req, res) => {
//     try {
//         // Find the user by ID and remove from the database
//         await User.findByIdAndRemove(req.params.id);
//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting user:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };


export {
    getAllUsers,
    createUser,
}
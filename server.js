import express from 'express';
import cors from 'cors'
import bcrypt from 'bcrypt'
import colors from 'colors'
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import userRoutes from './routes/usersRoutes.js'
import User from './model/user1Model.js';
import productRoutes from './routes/productRoutes.js'
import expressSession from 'express-session'
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
const app = express();
const port = 5000;
// const port = process.env.PORT || 6000;

connectDB()
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}));
// Initialize Passport and set up passport session
app.use(passport.initialize());
app.use(passport.session());
// Configure Passport local strategy for authentication
passport.use(new LocalStrategy({ usernameField: 'email' },async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        // console.log(user)
        if (!user) {
            return done(null, false, { message: 'Invalid username.' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return done(null, false, { message: 'Invalid password.' });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));
// Serialize user for the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// Deserialize user from the session
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

app.use('/user',userRoutes)
app.use('/api', productRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


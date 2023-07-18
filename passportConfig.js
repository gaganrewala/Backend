// auth.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './model/user1Model.js'

const initializingPassport  = (passport) => {
    // Passport local strategy for authentication
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
            try {
                // Find the user with the provided email
                const user = await User.findOne({ email });
                console.log(user)
                if (!user) {
                    return done(null, false, { message: 'Invalid email.' });
                }
                // Compare the provided password with the hashed password in the database
                const isValidPassword = await bcrypt.compare(password, user.password);

                if (!isValidPassword) {
                    return done(null, false, { message: 'Invalid password.' });
                }
                // If the credentials are valid, return the user object
                return done(null, user);
            } catch (err) {
                console.error('Error during authentication:', err);
                return done(err);
            }
        })
    );

    // Serialize user for the session
    passport.serializeUser((user, done) => {
        // Your serialization logic here...
        done(null, user.id);
    });

    // Deserialize user from the session
    passport.deserializeUser((id, done) => {
        // Your deserialization logic here...
        User.findById(id, (err, user) => {
            done(err, user);
          });
    });
};

export {initializingPassport}
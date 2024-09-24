const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
}, (email, password, done) => {
    User.findOne({ email }).then((user) => {
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        user.comparePassword(password).then((isMatch) => {
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, { message: 'Incorrect password.' });
        });
    });
}));

module.exports = passport;

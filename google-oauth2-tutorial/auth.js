const passport = require('passport');
let GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '44081484983-r741c5igtivpdjisjaet2r5n32gok3rk.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/google/callback",
        passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
import { doesNotMatch } from "assert";
import dotenv from "dotenv";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

dotenv.config();

const clientID = process.env.GOOGLE_ID as string;
const clientSecret = process.env.GOOGLE_SECRET as string;

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: "http://localhost:5000/auth/google",
    },
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

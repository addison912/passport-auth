import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as FacebookStrategy } from "passport-facebook";

dotenv.config();

const GoogleID = process.env.GOOGLE_ID as string;
const GoogleSecret = process.env.GOOGLE_SECRET as string;
const GoogleCallbackURL = "/auth/google/callback";

const GithubID = process.env.GITHUB_ID as string;
const GithubSecret = process.env.GITHUB_SECRET as string;
const GithubCallbackURL = "/auth/github/callback";

const FacebookID = process.env.FACEBOOK_ID as string;
const FacebookSecret = process.env.FACEBOOK_SECRET as string;
const FacebookCallbackURL = "/auth/facebook/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID: GoogleID,
      clientSecret: GoogleSecret,
      callbackURL: GoogleCallbackURL,
    },
    function (_accessToken, _refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GithubID,
      clientSecret: GithubSecret,
      callbackURL: GithubCallbackURL,
    },
    function (
      _accessToken: any,
      _refreshToken: any,
      profile: any,
      done: (arg0: null, arg1: any) => void
    ) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FacebookID,
      clientSecret: FacebookSecret,
      callbackURL: FacebookCallbackURL,
    },
    function (_accessToken, _refreshToken, profile, done) {
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

export default passport;

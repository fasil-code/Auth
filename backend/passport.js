const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
"426144215111-663835tseb3pcu5j3saq0h6tva78b1ii.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID="f1798dd40bb082d296c5";

const GITHUB_CLIENT_SECRET ="3fa5711e01089ab43a7bec5d01b0c217fbc6e0f4"
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret:GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret:GITHUB_CLIENT_SECRET ,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
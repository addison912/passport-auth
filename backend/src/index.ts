import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
// import passportSetup from "./passport";
// import authRoute from "./routes/auth";

const app = express();
dotenv.config();

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SECRET as string],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// app.use("/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});

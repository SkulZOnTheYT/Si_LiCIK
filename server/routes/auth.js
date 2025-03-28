import express from "express";
import { OAuth2Client } from 'google-auth-library';
import User from '../model/User.js';
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: `${process.env.SERVER_URL || "http://localhost:5000"}/auth/google/callback`
});

router.get("/google", (req, res) => {
  const url = googleClient.generateAuthUrl({
    scope: ['profile', 'email'],
    prompt: 'select_account'
  });
  res.redirect(url);
});

router.get("/google/callback", async (req, res) => {
  try {
    console.log("Callback Query:", req.query);
    const { code } = req.query;

    if (!code) throw new Error("No code provided");

    const { tokens } = await googleClient.getToken(code);
    console.log("Tokens:", tokens);

    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    console.log("Payload:", payload);

    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = await User.create({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        avatar: payload.picture,
      });
    }

    req.session.user = user;
    console.log("Session set:", req.session.user);

    req.session.save((err) => {
      if (err) console.error("Session save error:", err);
      console.log("Redirecting to:", `${CLIENT_URL}/dashboard`);
      res.redirect(`${CLIENT_URL}/dashboard`);
    });

  } catch (error) {
    console.error("Callback Error:", error.message);
    res.redirect(`${CLIENT_URL}/login`);
  }
});

router.get("/status", (req, res) => {
  if (req.session.user) {
    return res.json({
      isAuthenticated: true,
      user: req.session.user,
    });
  }
  return res.json({
    isAuthenticated: false,
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.clearCookie("connect.sid");
    res.redirect(CLIENT_URL);
  });
});

export default router;
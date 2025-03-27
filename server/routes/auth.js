import express from "express";
import { OAuth2Client } from 'google-auth-library';
import User from '../model/User.js';

const router = express.Router();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const googleClient = new OAuth2Client({
  clientId: "157562183154-g1e336oi1rr6di75t0vlm04b10l4cpum.apps.googleusercontent.com",
  clientSecret: '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',
  redirectUri: `${process.env.SERVER_URL || "http://localhost:5000"}/auth/google/callback`
});

router.get("/google", (req, res) => {
  const url = googleClient.generateAuthUrl({
    scope: ['profile', 'email'],
    prompt: 'select_account'
  });
  res.redirect(url);
});

// Google callback route
router.get("/google/callback", async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await googleClient.getToken(code);
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: "157562183154-g1e336oi1rr6di75t0vlm04b10l4cpum.apps.googleusercontent.com"
    });

    const payload = ticket.getPayload();
    
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
    res.redirect(`${CLIENT_URL}/dashboard`);
  } catch (error) {
    console.error('Authentication error:', error);
    res.redirect(`${CLIENT_URL}/login`);
  }
});

// Check authentication status
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

// Logout route
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
import express from "express";
import passport from "passport";
const router = express.Router();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Google authentication route
router.get("/google", passport.authenticate("google", { 
  scope: ["profile", "email"],
  prompt: "select_account",
}));

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${CLIENT_URL}/login`,
    session: true,
  }),
  (req, res) => {
    res.redirect(`${CLIENT_URL}/dashboard`);
  }
);

// Check authentication status
router.get("/status", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({
      isAuthenticated: true,
      user: req.user,
    });
  }
  return res.json({
    isAuthenticated: false,
  });
});

// Logout route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      }
      res.clearCookie("connect.sid");
      res.redirect(CLIENT_URL);
    });
  });
});

export default router;
import express from "express"
import passport from "passport"
const router = express.Router()

// Rute untuk memulai autentikasi Google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }))

// Callback URL setelah autentikasi Google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL || "http://localhost:3000"}/login`,
    session: true,
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL || "https://silicik.vercel.app/dashboard") // Redirect ke halaman utama setelah login berhasil
  },
)

// Endpoint untuk memeriksa status autentikasi
router.get("/status", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({
      isAuthenticated: true,
      user: req.user,
    })
  }
  return res.json({
    isAuthenticated: false,
  })
})

// Endpoint untuk logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }
    res.redirect(process.env.CLIENT_URL || "http://localhost:3000")
  })
})

export default router
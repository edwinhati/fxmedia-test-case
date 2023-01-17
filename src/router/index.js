const express = require("express");
const path = require("path");
const router = express.Router();
const comment = require("../controllers/comment.controller");
const user = require("../controllers/user.controller");
const { requireAuth } = require("../middleware/user.middleware");

router.get("/api/comment", comment.list);
router.post("/api/comment", comment.post);
router.get("/api/comment/:id", comment.get);
router.put("/api/comment/:id", comment.update);
router.delete("/api/comment/:id", comment.delete);
router.post("/api/user/register", user.register);
router.post("/api/user/login", user.login);
router.get("/api/user/logout", user.logout);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../view/home.html"));
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../view/login.html"));
});
router.get("/admin", (req, res) => {
  res.redirect("/admin/comments");
});
router.get("/admin/comments/edit/:id", requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "../../view/edit.html"));
});
router.get("/admin/comments", requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "../../view/comments.html"));
});
router.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../../view/style.css"));
});
router.get("/logo", (req, res) => {
  res.sendFile(path.join(__dirname, "../../view/assets/logo.png"));
});

module.exports = router;

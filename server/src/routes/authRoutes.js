const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { loginCheck, isAuth, isAdmin } = require("../middlewares/authMiddlewares");

router.post("/isadmin", authControllers.admin);
router.post("/signup", authControllers.signup);
router.post("/signin", authControllers.signin);
router.post("/user", loginCheck, isAuth, isAdmin, authControllers.allUser);

module.exports = router;

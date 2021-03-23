const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configs/keys");
const { userRoleConfig } = require("../configs/role");

exports.loginCheck = (req, res, next) => {
  try {
    let token = req.headers.token;
    token = token.replace("Bearer ", "");
    decode = jwt.verify(token, JWT_SECRET);
    req.userDetails = decode;
    next();
  } catch (err) {
    res.json({ error: "You must be logged in" });
  }
};

exports.isAuth = (req, res, next) => {
  if (
    !req.body.loggedInUserId ||
    !req.userDetails._id ||
    req.body.loggedInUserId != req.userDetails._id
  ) {
    res.status(403).json({ error: "You are not authenticate" });
  }
  next();
};

exports.isAdmin = async (req, res, next) => {
  try {
    const reqUser = await userModel.findById(req.body.loggedInUserId);
    if (reqUser.userRole === userRoleConfig) {
      res.status(403).json({ error: "Access denied" });
    }
    next();
  } catch {
    res.status(404);
  }
};

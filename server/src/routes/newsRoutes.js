const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  allNews,
  addNews,
  editNews,
  deleteNews,
} = require("../controllers/newsControllers");
const { loginCheck } = require("../middlewares/authMiddlewares");

// Image Upload setting
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/news");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/all-news", allNews);
router.post("/add-news", loginCheck, upload.single("imageUrl"), addNews);
router.post("/edit-news", loginCheck, editNews);
router.post("/delete-news", loginCheck, deleteNews);

module.exports = router;

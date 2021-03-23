const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

// database connection
const database = require("./configs/db");
database();

// import routers
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");

// middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/news", newsRoutes);

// Run Server
const PORT = process.env.PORT || 4321;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

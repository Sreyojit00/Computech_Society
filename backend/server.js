const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiryRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*", 
}));

app.use((req, res, next) => {
  console.log("👉 API HIT:", req.method, req.url);
  next();
});

app.use(express.json());

app.use((req, res, next) => {
  console.log("👉 API HIT:", req.method, req.url);
  next();
});

// Routes
app.use("/api", enquiryRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiryRoutes");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: [
    "https://computechsociety.netlify.app"
  ]
}));

app.use(express.json());

// ✅ Debug log
app.use((req, res, next) => {
  console.log("👉 API HIT:", req.method, req.url);
  next();
});

// ✅ Routes
app.use("/api", enquiryRoutes);

// ✅ Start server AFTER DB connect
const startServer = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      family: 4,
    });

    console.log("MongoDB Connected ✅");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB Error ❌", error);
  }
};

startServer();

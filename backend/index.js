const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); 
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require("dotenv").config();
const courseRoutes = require('./routes/courseRoutes');
const app = express(); // 👈 declared first


// ✅ All routes using require
const mentorRoutes = require('./routes/users/mentorRoutes');
const aboutRoutes = require('./routes/aboutUsRoutes');
const heroSectionRoutes = require("./routes/heroSectionRoutes");
const contentRoutes = require('./routes/digitalmerketingRoutes');
const termsRoutes = require('./routes/terms');
const privacyRoutes = require('./routes/privacyRoutes');
const contactMessagesRoute = require('./routes/contactMessages');
const testimonialRoutes = require("./routes/testimonial");
const newsletterRoutes = require("./routes/newsletterRoutes");

// ✅ 👇 NEW: Application form route
// const applicationRoutes = require("./routes/applicationRoutes");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ✅ Routes
app.use('/api/users', mentorRoutes);
app.use('/api/about', aboutRoutes);
app.use("/api/hero-section", heroSectionRoutes);
app.use('/api/terms', termsRoutes);
app.use("/api/privacy", privacyRoutes); 
app.use('/api/content', contentRoutes);
app.use("/api/contact", require('./routes/contactRoutes'));
app.use('/api/courses', courseRoutes);
app.use('/api/contact-messages', contactMessagesRoute);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/newsletter", newsletterRoutes);
// server.js or app.js
// Example Mongoose models (replace with your actual schema)
const Category = require('./models/Category'); // <- you must have this
const Course = require('./models/Course');  



// GET all categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// GET courses by category
app.get("/api/courses", async (req, res) => {
  try {
    const category = req.query.category;
    const courses = await Course.find({ category: category });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});


// ✅ 👇 Add this new route
app.use("/api/applications", require("./routes/applicationRoutes"));

// app.use("/api/applications", applicationRoutes);

// Static folder to serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// ===========================
//       SERVER ENTRY
// ===========================

const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// ===========================
//       DATABASE
// ===========================
const { dbconnect } = require('./config/database');
dbconnect();

// ===========================
//       CLOUDINARY
// ===========================
const { cloudinaryConnect } = require('./config/cloudinary');
try {
  cloudinaryConnect();
  console.log('Cloudinary connected successfully');
} catch (err) {
  console.error('Cloudinary connection failed: ', err);
}

// ===========================
//       MIDDLEWARES
// ===========================
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://65.1.248.230",
  "http://65.1.248.230:80",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp',
    createParentPath: true,
  })
);

// ===========================
//       API ROUTES
// ===========================
const userRoutes = require('./routes/User');
const profileRoutes = require('./routes/Profile');
const paymentRoutes = require('./routes/Payment');
const courseRoutes = require('./routes/Course');
const contactRoute = require('./routes/contactRoute');

app.use('/api/v1/auth', userRoutes)
app.use('/api/v1/course', courseRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use('/api/v1', contactRoute);

// Optional default API route
app.get('/api', (req, res) => {
  res.json({ success: true, message: "API is running..." });
});

// ===========================
//       FRONTEND (React SPA)
// ===========================
// app.use(express.static(path.resolve(__dirname, '../dist')));

// // Catch-all route for React
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
// });

// ===========================
//       START SERVER
// ===========================
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

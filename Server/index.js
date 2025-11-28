
const express = require('express');
const app = express();


const userRoutes = require('./routes/User');
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require('./routes/Payment');
const courseRoutes = require('./routes/Course');
const contactRoute = require("./routes/contactRoute");

// const database = require('./config/database');

const cookieParser = require('cookie-parser');

const cors = require('cors'); //backened entertain the front request
// const {cloudinaryConnect} = require('./config/cloudinary');
const fileUpload = require('express-fileupload');

const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 8080;

//database connect
const {dbconnect} = require("./config/database");
dbconnect();


//middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5173",
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
        tempFileDir:"/tmp",
        createParentPath: true 
    })
)


//cloudinary connetion
 const {cloudinaryConnect} = require("./config/cloudinary");
 cloudinaryConnect();


//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1", contactRoute);


//default route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running..."
    });
});


app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})

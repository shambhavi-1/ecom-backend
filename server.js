const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
dotenv.config();

const app = express();
app.use(express.json()); // ✅ parse JSON body

app.use(cors());
// {     origin: "http://localhost:5173", // ✅ your React app URL
//      credentials: true, // ✅ allows cookies to be sent
// }

app.use(cookieParser()); // ✅ allow reading cookies

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

//Auth Routes
app.use("/api/auth", authRoutes);

//Product Routes
app.use("/api/products", productRoutes);

//cart Routes
app.use("/api/cart", cartItemRoutes);

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});

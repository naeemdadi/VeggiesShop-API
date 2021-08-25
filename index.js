import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import productRouter from "./Routes/productRouter.js";
import userRouter from "./Routes/userRouter.js";
import orderRouter from "./Routes/orderRouter.js";
import wishlistRouter from "./Routes/wishlistRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up a whitelist and check against it:
var whitelist = ["https://veggiesshop.netlify.app"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/VeggiesEcom", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Routers
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/wishlist", wishlistRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_Client_ID);
});

// Server route
app.get("/", (req, res) => {
  res.send("Getting data from Server");
});

// Middleware for sending an error message to front
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

const port = process.env.PORT || 5000;

// Starting a Server
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

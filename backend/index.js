require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const holdingModel = require("./models/holdingModel");
const positionModel = require("./models/positionModel");
const orderModel = require("./models/orderModel");
const userModel = require("./models/userModel");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./authRoute");
const { requireAuth } = require("./authMiddleware");
// app.get("/addPosition", async (req, res) => {
//   let tempPosition = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ]

//   tempPosition.forEach((item) => {
//     let newPosition = new positionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("done");
// });

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean); // removes any undefined values if env vars aren't set

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHolding = await holdingModel.find({});
  res.json(allHolding);
});

app.get("/allPositions", async (req, res) => {
  let allPosition = await positionModel.find({});
  res.json(allPosition);
});

app.get("/allOrders", requireAuth, async (req, res) => {
  let allOrders = await orderModel.find({ userId: req.userId });
  res.json(allOrders);
});

app.post("/newOrder", requireAuth, async (req, res) => {
  let newOrder = new orderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userId: req.userId,
  });

  await newOrder.save();

  res.send("order saved");
});

// app.get("/seedUsers", async (req, res) => {
//   try {
//     const users = [
//       { username: "john_doe", email: "john@example.com", password: "password123" },
//       { username: "jane_doe", email: "jane@example.com", password: "password123" },
//     ];

//     for (const u of users) {
//       const exists = await userModel.findOne({ email: u.email });
//       if (!exists) await userModel.create(u);
//     }

//     res.send("2 dummy users added");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// });

app.delete("/deleteOrder/:id", async (req, res) => {
  await orderModel.findByIdAndDelete(req.params.id);
  res.send("order deleted");
});

app.put("/updateOrder/:id", async (req, res) => {
  await orderModel.findByIdAndUpdate(req.params.id, {
    qty: req.body.qty,
    price: req.body.price,
  });

  res.send("order updated");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  mongoose.connect(url);
  console.log("Connected to MongoDB");
});

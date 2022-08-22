const { config } = require("dotenv");
const express = require("express");
require("dotenv").config();

const cors = require("cors");
const products = require("./datasource/products");
const connectDb = require("./utils/connect.db");
connectDb();
const usersRouter = require("./routes/users.routes")

const productsRouter=require("./routes/products.routes")


//initializing express object
const app = express();

//express middlewear
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

//home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our farmers Db</h1>");
});

//get all products
app.get("/api/v1/products", (req, res) => {
  res.json({
    success: true,
    data: products,
  });
});

//save data to db
app.post("/api/v1/products", (req, res) => {
  res.json({
    success: true,
    data: [req.body, ...products],
  });
});

const port = process.env.PORT;

app.listen(port, function () {
  console.log("hello:" + port);
});

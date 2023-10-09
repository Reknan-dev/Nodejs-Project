require('dotenv').config();
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
connectToDB_string = process.env.DB_CONNECTION_STRING;




mongoose
  .connect(connectToDB_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});




app.listen(3000);

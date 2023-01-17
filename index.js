const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const routes = require("./src/router");
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(routes);

mongoose
  .connect(
    "mongodb+srv://fxmedia:testcase@cluster0.jzluaqo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});
mongoose
  .connect(
    "mongodb+srv://fxmedia:testcase@cluster0.jzluaqo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });

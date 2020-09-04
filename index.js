const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const feedRouter = require("./routers/feed.router");
const bookRouter = require("./routers/book.router");
const database = require("./models");
const cors = require("cors");

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());
app.use("/book", bookRouter);

database.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(4000);

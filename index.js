const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const feedRouter = require("./routers/feed.router");
const bookRouter = require("./routers/book.router");
const database = require("./models");

app.use(bodyParser.json());
app.use("/book", bookRouter);

database.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

app.listen(4000);

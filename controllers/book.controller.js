const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const book = {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  };
  //TODO: INSERT INTO BOOK (title, description, author) VALUES ()  / Menambahkan data ke table
  Book.create(book)
    .then((data) => res.send(data))
    .catch((error) =>
      res.status(500).send({
        message: "Error ketika membuat buku",
      })
    );
};

exports.read = (req, res) => {
  console.log("REQUEST MENAMPILKAN BUKU");
  //TODO: SELECT * FROM / Menampilkan data yang ada di table
  Book.findAll()
    .then((data) => res.send(data))
    .catch((error) =>
      res.status(500).send({
        message: "Error ketika menampilkan daftar buku",
      })
    );
};

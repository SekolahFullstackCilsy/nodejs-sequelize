const db = require("../models");
const Book = db.books;

exports.create = async (req, res) => {
  //TODO: INSERT INTO BOOK (title, description, author) VALUES ()  / Menambahkan data ke table
  try {
    const book = {
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    };

    const data = await Book.create(book);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "Error ketika membuat buku",
    });
  }
};

exports.read = async (req, res) => {
  console.log("REQUEST MENAMPILKAN BUKU");
  //TODO: SELECT * FROM / Menampilkan data yang ada di table
  try {
    const books = await Book.findAll();
    res.send(books);
  } catch (error) {
    res.status(500).send({
      message: "Error ketika menampilkan daftar buku",
    });
  }
};

exports.update = async (req, res) => {
  const params = req.params;
  const id = params.id;

  const body = req.body;

  try {
    const updatedBook = await Book.update(body, {
      where: {
        id,
      },
    });

    res.send(updatedBook);
  } catch (error) {
    res.status(500).send({
      message: "Error ketika mengupdate buku",
    });
  }
};

exports.delete = async (req, res) => {
  const params = req.params;
  const id = params.id;

  try {
    await Book.destroy({
      where: {
        id,
      },
    });

    res.send({
      message: "Sukses menghapus buku",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error ketika menghapus buku",
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const params = req.params;
    const id = params.id;

    const book = await Book.findByPk(id);
    res.send(book);
  } catch (error) {
    res.status(500).send({
      message: "Error ketika menampilkan buku by id",
    });
  }
};

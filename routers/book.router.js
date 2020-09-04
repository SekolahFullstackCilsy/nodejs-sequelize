const express = require("express");
const bookController = require("../controllers/book.controller");

const router = require("express").Router();

router.get("/", bookController.read);
router.post("/", bookController.create);
router.patch("/:id", bookController.update);
router.delete("/:id", bookController.delete);

module.exports = router;

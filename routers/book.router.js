const express = require("express");
const bookController = require("../controllers/book.controller");

const router = require("express").Router();

router.get("/", bookController.read);
router.post("/", bookController.create);

module.exports = router;

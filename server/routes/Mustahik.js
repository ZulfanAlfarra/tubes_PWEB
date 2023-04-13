const express = require("express");
const router = express.Router();
const { Mustahik } = require("../models");

router.get("/", async (req, res) => {
  const dataOfMustahik = await Mustahik.findAll();
  res.json(dataOfMustahik);
});

router.post("/", async (req, res) => {
  const data = req.body;
  await Mustahik.create(data);
});

module.exports = router;

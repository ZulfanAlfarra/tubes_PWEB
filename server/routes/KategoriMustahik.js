const express = require("express");
const router = express.Router();
const { KategoriMustahik } = require("../models");

router.get("/", async (req, res) => {
  const dataOfMuzakki = await KategoriMustahik.findAll();
  res.json(dataOfMuzakki);
});

// router.post("/", async (req, res) => {
//   const muzakki = req.body;
//   await Muzakki.create(muzakki);
// });

module.exports = router;

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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const mustahik = await Mustahik.findAll({ where: { id: id } });
  res.json(mustahik);
});

router.put("/update", async (req, res) => {
  const mustahik = req.body;
  await Mustahik.update(
    {
      nama: mustahik.nama,
      kategori: mustahik.kategori,
      hak: mustahik.hak,
      beras: mustahik.beras,
      uang: mustahik.uang,
    },
    { where: { id: mustahik.id } }
  );
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await Mustahik.destroy({
    where: {
      id: id,
    },
  });
});

module.exports = router;

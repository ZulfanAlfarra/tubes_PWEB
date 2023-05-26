const express = require("express");
const router = express.Router();
const { Muzakki } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const dataOfMuzakki = await Muzakki.findAll();
  res.json(dataOfMuzakki);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const muzakki = await Muzakki.findAll({ where: { id: id } });
  res.json(muzakki);
});

router.post("/", async (req, res) => {
  const muzakki = req.body;
  await Muzakki.create(muzakki);
});

router.put("/update", async (req, res) => {
  const muzakki = req.body;
  await Muzakki.update(
    {
      nama: muzakki.nama,
      jmlTanggungan: muzakki.jmlTanggungan,
      ket: muzakki.ket,
    },
    { where: { id: muzakki.id } }
  );
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await Muzakki.destroy({
    where: {
      id: id,
    },
  });
});

module.exports = router;

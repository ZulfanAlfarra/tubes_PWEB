const express = require("express");
const router = express.Router();
const { BayarZakat } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const dataOfBayar = await BayarZakat.findAll();
  res.json(dataOfBayar);
});

router.post("/", async (req, res) => {
  const bayar = req.body;
  await BayarZakat.create(bayar);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await BayarZakat.destroy({
    where: {
      id: id,
    },
  });

  res.json("berhasil hapus");
});

module.exports = router;

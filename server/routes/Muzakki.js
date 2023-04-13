const express = require("express");
const router = express.Router();
const { Muzakki } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  const dataOfMuzakki = await Muzakki.findAll();
  res.json(dataOfMuzakki);
});

router.post("/", async (req, res) => {
  const muzakki = req.body;
  await Muzakki.create(muzakki);
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

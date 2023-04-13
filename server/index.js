const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const muzakki = require("./routes/Muzakki");
app.use("/muzakki", muzakki);

const bayar = require("./routes/BayarZakat");
app.use("/bayar", bayar);

const katMustahik = require("./routes/KategoriMustahik");
app.use("/katmustahik", katMustahik);

const mustahik = require("./routes/Mustahik");
app.use("/mustahik", mustahik);

const user = require("./routes/Users");
app.use("/auth", user);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
});

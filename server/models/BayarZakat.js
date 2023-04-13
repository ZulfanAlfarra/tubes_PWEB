const Muzakki = require("./Muzakki");

module.exports = (Sequelize, DataTypes) => {
  const BayarZakat = Sequelize.define("BayarZakat", {
    nama_kk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jml_tanggungan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jenis_bayar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jmlDibayar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    beras: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    uang: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  BayarZakat.associate = (models) => {
    BayarZakat.hasMany(models.Muzakki, {
      onDelete: "cascade",
    });
  };

  return BayarZakat;
};

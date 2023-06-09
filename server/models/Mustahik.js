module.exports = (Sequelize, DataTypes) => {
  const Mustahik = Sequelize.define("Mustahik", {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hak: {
      type: DataTypes.FLOAT,
      allowNull: true,
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

  return Mustahik;
};

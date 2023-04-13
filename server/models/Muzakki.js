module.exports = (Sequelize, DataTypes) => {
  const Muzakki = Sequelize.define("Muzakki", {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jmlTanggungan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Muzakki.associate = (models) => {
    Muzakki.hasMany(models.BayarZakat, {
      onDelete: "cascade",
    });
  };

  return Muzakki;
};

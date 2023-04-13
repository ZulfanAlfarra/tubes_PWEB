module.exports = (sequelize, DataTypes) => {
  const KategoriMustahik = sequelize.define("KategoriMustahik", {
    nama_kat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jml_hak: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return KategoriMustahik;
};

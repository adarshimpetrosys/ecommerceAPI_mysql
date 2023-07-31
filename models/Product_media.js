module.exports = (sequelize, DataTypes) => {
  const Product_media = sequelize.define("Product_media", {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "default.png",
    },
    image_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Product_media;
};

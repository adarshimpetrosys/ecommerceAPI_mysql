module.exports = (sequelize, DataTypes) => {
  const Product_stock = sequelize.define("Product_stock", {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productvariantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    childcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
    
    },

    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Product_stock;
};

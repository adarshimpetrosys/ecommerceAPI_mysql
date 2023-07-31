module.exports = (sequelize, DataTypes) => {

    const Product_variants = sequelize.define("Product_variants", {
      variant_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      variant_value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      variant_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return Product_variants;
  };
  
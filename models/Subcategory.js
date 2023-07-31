module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define("Subcategory", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'default.png',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Subcategory;
};

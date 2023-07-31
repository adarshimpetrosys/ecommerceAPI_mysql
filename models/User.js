module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileOTP: {
      type: DataTypes.STRING,
      allowNull: null,
    },

    emailOTP: {
      type: DataTypes.STRING,
      allowNull: null,
    },

    mobileverify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    emailverify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};

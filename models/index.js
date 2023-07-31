const { Sequelize, DataTypes } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("mysql_sequelize_apis", "root", "", {
  host   : "localhost",
  logging:false,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db           =  {};
db.Sequelize       =  Sequelize;
db.sequelize       =  sequelize;


// categories 
db.category        =  require("./Category")(sequelize, DataTypes);
db.subcategory     =  require("./Subcategory")(sequelize, DataTypes);
db.childcategory   =  require("./Childcategory")(sequelize, DataTypes);

// users 
db.user            =  require("./User")(sequelize, DataTypes);
db.useraddress     =  require("./Useraddress")(sequelize, DataTypes);

// products 
db.product         =  require("./Product")(sequelize, DataTypes)
db.product_media   =  require("./Product_media")(sequelize, DataTypes);
db.product_variant =  require("./Product_variant")(sequelize, DataTypes);
db.product_stock   =  require("./Product_stock")(sequelize, DataTypes);

db.product.belongsTo(db.subcategory,{foreignKey:"subcategoryId"})
db.product.belongsTo(db.category,{foreignKey:"categoryId"})
db.product.belongsTo(db.childcategory,{foreignKey:"childcategoryId"})








// all mapping define here 

db.category.hasMany(db.subcategory,{foreignKey:"categoryId"});
db.subcategory.belongsTo(db.category,{foreignKey:"categoryId"});

db.subcategory.hasMany(db.childcategory,{foreignKey:"subcategoryId"});
db.category.hasMany(db.childcategory,{foreignKey:"categoryId"});

db.childcategory.belongsTo(db.category,{foreignKey:"categoryId"});
db.childcategory.belongsTo(db.subcategory,{foreignKey:"subcategoryId"});


db.sequelize.sync({ force: false });

module.exports = db;

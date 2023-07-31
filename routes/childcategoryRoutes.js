const express = require("express");
const childcategoryRoutes = express.Router();
const childcategoryController = require("../controllers/childcategoryController");

childcategoryRoutes.post("/childcategory", childcategoryController.add);
childcategoryRoutes.get("/childcategory", childcategoryController.index);
childcategoryRoutes.get("/childcategory/:id", childcategoryController.edit);
childcategoryRoutes.delete("/childcategory/:id", childcategoryController.delete);
childcategoryRoutes.patch("/childcategory", childcategoryController.update);

module.exports = childcategoryRoutes;

const express = require("express");
const subcatRouter = express.Router();
const subcategoryController = require("../controllers/subcategoryController");

subcatRouter.post("/subcategory", subcategoryController.add);
subcatRouter.get("/subcategory", subcategoryController.index);
subcatRouter.get("/subcategory/:id", subcategoryController.edit);
subcatRouter.delete("/subcategory/:id", subcategoryController.delete);
subcatRouter.patch("/subcategory", subcategoryController.update);

module.exports = subcatRouter;

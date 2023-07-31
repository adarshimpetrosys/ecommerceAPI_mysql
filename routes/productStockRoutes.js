const express                = require("express");
const productStockRoutes   = express.Router();
const productStockController = require("../controllers/productStockController")




productStockRoutes.post("/product-stock",       productStockController.add);
productStockRoutes.get("/product-stock",        productStockController.index);
productStockRoutes.get("/product-stock/:id",    productStockController.edit);
productStockRoutes.delete("/product-stock/:id", productStockController.delete);
productStockRoutes.patch("/product-stock",      productStockController.update);

module.exports = productStockRoutes;


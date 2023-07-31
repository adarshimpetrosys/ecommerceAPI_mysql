const express            = require("express");
const productVariantRoutes = express.Router();
const productVariantController = require("../controllers/productVariantController")




productVariantRoutes.post("/product-variant", productVariantController.add);
productVariantRoutes.get("/product-variant", productVariantController.index);
productVariantRoutes.get("/product-variant/:id", productVariantController.edit);
productVariantRoutes.delete("/product-variant/:id", productVariantController.delete);
productVariantRoutes.patch("/product-variant", productVariantController.update);

module.exports = productVariantRoutes;


const express            = require("express");
const productController = require("../controllers/productController");
const productRouter     = express.Router();

productRouter.post("/products", productController.add);
productRouter.get("/products", productController.index);
productRouter.get("/products/:id", productController.edit);
productRouter.delete("/products/:id", productController.delete);
productRouter.get("/getprobycatid/:id", productController.getprobycatid);
productRouter.patch("/products", productController.update);

module.exports = productRouter;

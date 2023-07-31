const express            = require("express");
const productMediaRouter = express.Router();
const productMediaController = require("../controllers/productMediaController")




productMediaRouter.post("/product-media", productMediaController.add);
productMediaRouter.get("/product-media", productMediaController.index);
productMediaRouter.get("/product-media/:id", productMediaController.edit);
productMediaRouter.delete("/product-media/:id", productMediaController.delete);
productMediaRouter.patch("/product-media", productMediaController.update);

module.exports = productMediaRouter;


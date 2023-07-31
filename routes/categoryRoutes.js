const express            = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRouter     = express.Router();

categoryRouter.post("/category", categoryController.add);
categoryRouter.get("/category", categoryController.index);
categoryRouter.get("/category/:id", categoryController.edit);
categoryRouter.delete("/category/:id", categoryController.delete);
categoryRouter.patch("/category", categoryController.update);

module.exports = categoryRouter;

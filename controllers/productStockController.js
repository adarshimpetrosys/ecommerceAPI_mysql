const Joi                    = require("joi")
const productStockRepo       = require("../DbRepository/productStockRepo")

const productStockController = {


    async add(req, res) {
    //   console.log(  req.body)
        productStockSchema  = Joi.object({
         
            productId        :  Joi.number().required(),
            productvariantId :  Joi.number().required(),
            categoryId       :  Joi.number().required(),
            subcategoryId    :  Joi.number().required(),
            childcategoryId  :  Joi.number().required(),
            availability     :  Joi.string(),
            quantity         :  Joi.string(),   
          });
    
          const { error } = productStockSchema.validate(req.body);
    
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
         const data = await productStockRepo.add(req.body);
    
     if (data) {
        res.status(200).json({message: "Inserted Successfully", data: data, success: true });
      } else {
        res.status(404).json({ message: "Insert Failed", success: false });
      }
      },
    
      async index(req, res) {
        
      const allData = await productStockRepo.index();
    
        if (allData) {
          res.status(200).json({ data: allData, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
      async edit(req, res) {

        const id   = req.params.id;
        const data =  await productStockRepo.edit(id);
        
        if (data) {
          res.status(200).json({ data: data, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
      async update(req, res) {
    
          productStockSchema  = Joi.object({
            
            id               :  Joi.number().required(),
            productId        :  Joi.number().required(),
            productvariantId :  Joi.number().required(),
            categoryId       :  Joi.number().required(),
            subcategoryId    :  Joi.number().required(),
            childcategoryId  :  Joi.number().required(),
            availability     :  Joi.string(),
            quantity         :  Joi.string(),
            status           :  Joi.boolean(),
          
          });
    
          const { error } = productStockSchema.validate(req.body);
    
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          
         const updateData = await  productStockRepo.update(req.body);
    
          if (updateData) {
            res.status(200).json({ message: "Updated Successfully",  success: true });
          } else {
            res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
    
      async delete(req, res) {
        const id   = req.params.id;
        const data = await productStockRepo.delete(id);
        // console.log(data)
        if (data) {
        res.status(200).json({message: "Deleted Successfully", data: data, success: true });
        } else {
        res.status(404).json({ message: "No Data Found", success: false });
        }
      },


}

module.exports = productStockController;
const Joi                      = require("joi")
const productVariantRepo       = require("../DbRepository/productVariantRepo")
const productVariantController = {


    async add(req, res) {
    //   console.log(  req.body)
        productVariantSchema  = Joi.object({
            variant_name   : Joi.string().required(),
            variant_value  : Joi.string().required(),
            variant_code   : Joi.number().required(),
            productId      : Joi.number().required(),
          
          });
    
          const { error } = productVariantSchema.validate(req.body);
    
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
         const data = await productVariantRepo.add(req.body);
    
     if (data) {
        res.status(200).json({message: "Inserted Successfully", data: data, success: true });
      } else {
        res.status(404).json({ message: "Insert Failed", success: false });
      }
      },
    
      async index(req, res) {
        
      const allData = await productVariantRepo.index();
    
        if (allData) {
          res.status(200).json({ data: allData, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
      async edit(req, res) {

        const id   = req.params.id;
        const data =  await productVariantRepo.edit(id);
        
        if (data) {
          res.status(200).json({ data: data, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
      async update(req, res) {
    
          productVariantSchema  = Joi.object({
            id             : Joi.number().required(),
            variant_name   : Joi.string().required(),
            variant_value  : Joi.string().required(),
            variant_code   : Joi.number().required(),
            productId      : Joi.number().required(),
            status         : Joi.boolean(),
          
          });
    
          const { error } = productVariantSchema.validate(req.body);
    
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          
         const updateData = await  productVariantRepo.update(req.body);
    
          if (updateData) {
            res.status(200).json({ message: "Updated Successfully",  success: true });
          } else {
            res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
    
      async delete(req, res) {
        const id   = req.params.id;
        const data = await productVariantRepo.delete(id);
        // console.log(data)
        if (data) {
        res.status(200).json({message: "Deleted Successfully", data: data, success: true });
        } else {
        res.status(404).json({ message: "No Data Found", success: false });
        }
      },


}

module.exports = productVariantController;
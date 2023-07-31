const db                    = require("../models/index");
const Product_variant       = db.product_variant;


const productVariantRepo = {
    async add(bodyData) {

        // console.log(bodyData);

        try {
          
          const document   = Product_variant.build({

            variant_name   : bodyData.variant_name,
            variant_value  : bodyData.variant_value,
            variant_code   : bodyData.variant_code,
            productId      : bodyData.productId,

          });
    
          return (saveDoc = await document.save());
        } catch (error) {
    
          console.log (error);
    
        }
      },
    
      async index() {
        try {
        return  allData = await Product_variant.findAll({      }); 
        } 
        catch (error) {
        return error; 
        }
    
      },
    
     async edit(id) {
      try {
        // console.log(id)
        const data = await Product_variant.findOne({
        where: {
          id: id,
        },
        });
        
        return data;
      } catch (error) {
        return error
      }
          // console.log(data)
    
      },
    
     async update(bodyData) {
        try {
       const updateData = await Product_variant.update(
        {
            variant_name   : bodyData.variant_name,
            variant_value  : bodyData.variant_value,
            variant_code   : bodyData.variant_code,
            productId      : bodyData.productId,
            status         : bodyData.status
        },
        {
        where:{
           id: bodyData.id,
        },
        });
        
        return updateData;
    
        }catch (error) {
         return error;
        }
      },
    
      async delete(id) {
        try {
       const data = await Product_variant.destroy({
        where: {
          id: id,
         }, 
        });
    
        return data;
            
        } catch (error) {
         return error;   
        }
      },
}

module.exports = productVariantRepo;
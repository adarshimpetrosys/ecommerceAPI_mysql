const db                    = require("../models/index");
const Product_stock       = db.product_stock;


const productStockRepo = {
    async add(bodyData) {

        // console.log(bodyData);

        try {
          
          const document   = Product_stock.build({

            productId        : bodyData.productId,
            productvariantId : bodyData.productvariantId,
            categoryId       : bodyData.categoryId,
            subcategoryId    : bodyData.subcategoryId,
            childcategoryId  : bodyData.childcategoryId,
            availability     : bodyData.availability,
            quantity         : bodyData.quantity,
            
          });
    
          return (saveDoc = await document.save());
        } catch (error) {
    
          console.log (error);
    
        }
      },
    
      async index() {
        try {
        return  allData = await Product_stock.findAll({      }); 
        } 
        catch (error) {
        return error; 
        }
    
      },
    
     async edit(id) {
      try {
        // console.log(id)
        const data = await Product_stock.findOne({
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
       const updateData = await Product_stock.update(
        {   productId        : bodyData.productId,
            productvariantId : bodyData.productvariantId,
            categoryId       : bodyData.categoryId,
            subcategoryId    : bodyData.subcategoryId,
            childcategoryId  : bodyData.childcategoryId,
            availability     : bodyData.availability,
            quantity         : bodyData.quantity,
            status           : bodyData.status
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
       const data = await Product_stock.destroy({
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

module.exports = productStockRepo;
const db            = require("../models/index");
const Product_media = db.product_media;


const productMediaRepo = {
    async add(bodyData,filePath) {

        // console.log(bodyData);

        try {
          
          const document = Product_media.build({
          productId       : bodyData.productId,
          image           : bodyData.filePath,
          image_desc      : bodyData.image_desc,
        
        
          });
    
          return (saveDoc = await document.save());
        } catch (error) {
    
          console.log (error);
    
        }
      },
    
      async index() {
        try {
        return  allData = await Product_media.findAll({      }); 
        } 
        catch (error) {
        return error; 
        }
    
      },
    
     async edit(id) {
      try {
        // console.log(id)
        const data = await Product_media.findOne({
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
    
     async update(bodyData,filePath) {

        try {
       const updateData = await Product_media.update(
        {
        productId       : bodyData.productId,
        image           : filePath,
        image_desc      : bodyData.image_desc,
        status          : bodyData.status
        },
        {
        where:{
           id: bodyData.id,
        },
        });
        
        return updateData;
    
        }catch (error) {
         console.log(error)
        }
      },
    
      async delete(id) {
        try {
       const data = await Product_media.destroy({
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

module.exports = productMediaRepo;
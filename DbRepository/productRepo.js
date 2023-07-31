const db            = require("../models/index");
const Product       = db.product;
const Category      = db.category;
const Subcategory   = db.subcategory;
const Childcategory = db.childcategory;

const productRepo = {
    async add(bodyData,fileName) {

        // console.log(bodyData);
        console.log(fileName);

        try {
          
          const document = Product.build({

          name            : bodyData.name,
          desc            : bodyData.desc,
          image           : fileName,
          price           : bodyData.price,
          categoryId      : bodyData.categoryId,
          subcategoryId   : bodyData.subcategoryId,
          childcategoryId : bodyData.childcategoryId,

          });
    
          return (saveDoc = await document.save());
        } catch (error) {
    
          console.log (error);
    
        }
      },
    
      async index() {
        try {
        return  allData = await Product.findAll({      }); 
        } 
        catch (error) {
        return error; 
        }
    
      },
    
     async edit(id) {
      try {
        // console.log(id)
        const data = await Product.findOne({
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
    
     async update(bodyData,fileName) {
        try {

       const updateData = await Product.update(
        {
            name            : bodyData.name,
            desc            : bodyData.desc,
            image           : fileName,
            price           : bodyData.price,
            categoryId      : bodyData.categoryId,
            subcategoryId   : bodyData.subcategoryId,
            childcategoryId : bodyData.childcategoryId,
            status          : bodyData.status
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
       const data = await Product.destroy({
        where: {
          id: id,
         }, 
        });
    
        return data;
            
        } catch (error) {
         return error;   
        }
      },
    async  getprobycatid(catId){
        try {
          // console.log(id)
          const data = await Product.findAll({
          where: {
            categoryId: catId,
          },
          });
          
          return data;
        } catch (error) {
         return error;

        }
      }
}

module.exports = productRepo;
const db            = require("../models/index");
const Category      = db.category;
const Subcategory   = db.subcategory;
const Childcategory = db.childcategory;

const categoryRepo = {
  async add(bodyData,filePath) {
    try {

      const { name, email,desc } = bodyData;
      const document = Category.build({
      name : name,
      desc : desc,
      image:filePath,
      });

      return (saveDoc = await document.save());
    } catch (error) {

      // console.log (error);
      return error

    }
  },

  async index() {
    try {
    return allData = await Category.findAll({

      attributes:['id','name','desc','image','status'],

      include: [{ //start
          model: Subcategory,
          attributes:['id','categoryId','name','desc','image','status'],
          // where: { status:1 }, // Condition for the subcategory model
     
        include: [{
          model: Childcategory,
          attributes:['id','categoryId','subcategoryId','name','desc','image','status'],
          // where: { status:1}, // Condition for the childcategory model
          }],
        
      }], //end

      // where: { status:1 }, // Condition for the Category model
    });
    
    }
    catch (error) {
    return error; 
    }

  },

 async edit(id) {
  try {
    // console.log(id)
    const data = await Category.findOne({
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
   const updateData = await Category.update(
    {
        name:bodyData.name,
        desc:bodyData.desc,
        image:filePath,
        status:bodyData.status
    }, {
    where:{
       id: bodyData.id,
    },});
    
    return updateData;

    }catch (error) {
     return error;
    }
  },

  async delete(id) {
    try {
   const data = await Category.destroy({
    where: {
      id: id,
     }, 
    });

    return data;
        
    } catch (error) {
     return error;   
    }
  },
};

module.exports = categoryRepo;

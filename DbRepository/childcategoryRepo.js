const db       = require("../models/index");
const Childcategory = db.childcategory;

const childcategoryRepo = {
  async add(bodyData,filePath) {
    try {
      const { name, email,desc,categoryId,subcategoryId } = bodyData;
      const document = Childcategory.build({
      name: name,
      desc: desc,
      image:filePath,
      categoryId:categoryId,
      subcategoryId:subcategoryId,
      });

      return (saveDoc = await document.save());
    } catch (error) {

      console.log (error);

    }
  },

  async index() {
    try {
    return  allData = await Childcategory.findAll({}); 
    } 
    catch (error) {
    return error; 
    console.log(error)
    }

  },

 async edit(id) {
  try {
    // console.log(id)
    const data = await Childcategory.findOne({
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
   const updateData = await Childcategory.update(
    {
        name:bodyData.name,
        desc:bodyData.desc,
        image:filePath,
        categoryId:bodyData.categoryId,
        subcategoryId:bodyData.subcategoryId,
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
   const data = await Childcategory.destroy({
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

module.exports = childcategoryRepo;

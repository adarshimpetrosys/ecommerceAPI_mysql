const db       = require("../models/index");
const Subcategory = db.subcategory;

const subcategoryRepo = {
  async add(bodyData,filePath) {
    try {
      const { name, email,desc,categoryId } = bodyData;
      const document = Subcategory.build({
      name: name,
      desc: desc,
      image:filePath,
      categoryId:categoryId
      });

      return (saveDoc = await document.save());
    } catch (error) {

      console.log (error);

    }
  },

  async index() {
    try {
    return  allData = await Subcategory.findAll({}); 
    } 
    catch (error) {
    return error; 
    }

  },

 async edit(id) {
  try {
    // console.log(id)
    const data = await Subcategory.findOne({
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
   const updateData = await Subcategory.update(
    {
        name:bodyData.name,
        desc:bodyData.desc,
        image:filePath,
        categoryId:bodyData.categoryId,
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
   const data = await Subcategory.destroy({
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

module.exports = subcategoryRepo;

const multer           = require("multer");
const path             = require("path");
const fs               = require("fs");
const Joi              = require("joi")
const subcategoryRepo  = require("../DbRepository/subcategoryRepo");



const storage       = multer.diskStorage({

  destination:(req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb)   => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

  const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
  }).single("image"); //5 MB

// -------------------------------------------------------------------


const subcategoryController  = {
    async add(req, res) {
        // console.log(req.body)
    
        handleMultipartData(req, res, async (err) => {
        if (err) {
          res.status(500).json({  msg: "Internal Server Error", success: false, status: 500, error: err, });
        }else{
          
        const filePath = req.file.path;
        
        subcategorySchema = Joi.object({
            name      : Joi.string().min(3).max(30).required(),
            desc      : Joi.string().required(),
            categoryId: Joi.number(),
          });
    
        const { error } = subcategorySchema.validate(req.body);
    
        if (error) {
            fs.unlink(`${appRoot}/${filePath}`, (err) => {
              res.status(500).json({ msg: "Internal Server Error", success: false, status: 500, error: err,
              });
        });
            // rootfolder/uploads/filename.png
            return res.status(400).json({ error: error.details[0].message });
          }
    
     
    
       const data = await subcategoryRepo.add(req.body,filePath);
    
       if (data) {
        res.status(200).json({message: "Inserted Successfully", data: data, success: true });
      } else {
        res.status(404).json({ message: "Insert Failed", success: false });
      }
     }
    });
   },
    
      async index(req, res) {
        const allData = await subcategoryRepo.index();
    
        if (allData) {
          res.status(200).json({ data: allData, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
      async edit(req, res) {
        const id = req.params.id;
    
        const data =  await subcategoryRepo.edit(id);
        if (data) {
          res.status(200).json({ data: data, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
      async update(req, res) {
    
        handleMultipartData(req, res, async (err) => {
          if (err) {
            res.status(500).json({  msg: "Internal Server Error",  success: false, status: 500, error: err,
            });
          }else{
    
          const filePath = req.file.path;
    
          subcategorySchema = Joi.object({
            id        : Joi.string().required(),
            name      : Joi.string().min(3).max(30).required(),
            desc      : Joi.string().required(),
            categoryId:Joi.number(),
            status    : Joi.boolean(),
          });
    
          const { error } = subcategorySchema.validate(req.body);
    
          if (error) {
            fs.unlink(`${appRoot}/${filePath}`, (err) => {
             res.status(500).json({  msg: "Internal Server Error", success: false,  status: 500,error: err, });
            });
            // rootfolder/uploads/filename.png
            return res.status(400).json({ error: error.details[0].message });
          }
    
          
          const updateData = await  subcategoryRepo.update(req.body,filePath)
          if (updateData) {
            res.status(200).json({ message: "Updated Successfully",  success: true });
          } else {
            res.status(404).json({ message: "No Data Found", success: false });
          }
          }
    
        });
        
      },
    
    
      async delete(req, res) {
        const id   = req.params.id;
        const data = await subcategoryRepo.delete(id);
        // console.log(data)
        if (data) {
          res.status(200).json({message: "Deleted Successfully", data: data, success: true });
        } else {
          res.status(404).json({ message: "No Data Found", success: false });
        }
      },
    
};

module.exports = subcategoryController;
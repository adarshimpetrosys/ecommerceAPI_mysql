const express             = require("express");
const categoryRouter      = require("./routes/categoryRoutes");
const app                 = express();
const path                = require("path");
const subcatRouter        = require("./routes/subcategoryRoutes");
const childcategoryRoutes = require("./routes/childcategoryRoutes");
const userRoutes          = require("./routes/userRoutes");
const productRouter       = require("./routes/productRouter");
const productMediaRouter  = require("./routes/productMediaRouter");
const productVariantRoutes= require("./routes/productVariantRoutes");
const productStockRoutes  = require("./routes/productStockRoutes");

const cors                = require("cors")
global.appRoot            = path.resolve(__dirname);

require("./config/config");
require("./models/index"); //dbconn


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use(categoryRouter);
app.use(subcatRouter);
app.use(childcategoryRoutes);
app.use(userRoutes);
app.use(productRouter);
app.use(productMediaRouter);
app.use(productVariantRoutes);
app.use(productStockRoutes);


app.get("/",(req,res)=>{
  res.send("Congratulations You Are Live")
})
app.listen(process.env.PORT, () => {
  console.log("Server is listening at port 4000");
});

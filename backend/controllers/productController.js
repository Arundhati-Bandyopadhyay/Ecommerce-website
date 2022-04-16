const Product = require("../models/productModel");

//createProduct--admin
exports.createProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    sucsess: true,
    product,
  });
};

//get all products
exports.getAllProducts = async (req, res, next) => {
  const allProducts = await Product.find();

  res.status(200).json({
    sucsess: true,
    allProducts,
  });
};


//getproductdetails
exports.getproductdetails=async(req,res,next)=>{
    const productdetail=await Product.findById(req.params.id);

    if (!productdetail) {
        return res.status(500).json({
          sucsess: false,
          message: "product not found",
        });
      }
      res.status(200).json({ sucsess: true,
        
         productdetail });
}
//updateproducts--admin
exports.updateProducts = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      sucsess: false,
      message: "product not found",
    });
  }
  updatedproduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ sucsess: true,
    message:"product is updated",
     updatedproduct });
};


//delete product

exports.deleteProduct=async(req,res,next)=>{
    const deletedproduct=await Product.findById(req.params.id)
    if(!Product){
        return res.status(500).json({
            sucsess: false,
            message: "product not found",
          });
    }
     await deletedproduct.remove()
     res.status(200).json({
         sucsess:true,
         message:"product succesfully deleted"})

}
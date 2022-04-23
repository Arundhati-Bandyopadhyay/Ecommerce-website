const Product = require("../models/productModel");
const ErrorHandeler = require("../utils/errorhandeler");
const Errorhandeler = require("../utils/errorhandeler");
const catchAsyncErrors = require("../MIDDLEWARE/catchAsyncErrors");
const Apifeatures = require("../utils/apifeatures");

//createProduct--admin
exports.createProducts = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    sucsess: true,
    product,
  });
});

//get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerpage = 5;
  const productCount=await Product.countDocuments();
  const apifeatures = new Apifeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerpage);
    

  const allProducts = await apifeatures.query;

  res.status(200).json({
    sucsess: true,
    allProducts,
    productCount
  });
});

//getproductdetails
exports.getproductdetails = catchAsyncErrors(async (req, res, next) => {
  const productdetail = await Product.findById(req.params.id);

  if (!productdetail) {
    return next(new Errorhandeler("product not found", 404));
  }
  res.status(200).json({
    sucsess: true,

    productdetail,
  });
});
//updateproducts--admin
exports.updateProducts = catchAsyncErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
  }
  updatedproduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res
    .status(200)
    .json({ sucsess: true, message: "product is updated", updatedproduct });
});

//delete product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const deletedproduct = await Product.findById(req.params.id);
  if (!Product) {
    return next(new ErrorHandeler("product not found", 404));
  }
  await deletedproduct.remove();
  res.status(200).json({
    sucsess: true,
    message: "product succesfully deleted",
  });
});

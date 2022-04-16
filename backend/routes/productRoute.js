const express=require("express");
const { getAllProducts, createProducts,updateProducts, deleteProduct, getproductdetails } = require("../controllers/productController");

const router=express.Router();


router.route("/products").get(getAllProducts).post(createProducts)
router.route("/products/:id").put(updateProducts).delete(deleteProduct).get(getproductdetails)
module.exports=router;
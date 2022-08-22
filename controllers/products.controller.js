const products = require("../datasource/products");
const Product = require("../models/products.model");

//create and save a new product
async function addProduct(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty",
    });
  }
  const product = await Product.create(req.body);
  res.json({
    message: "Product added successfully",
    data: product,
  });
}

//Retrieve all products from the database
async function getAllProducts(req, res) {
  const products = await Product.find({});
  res.json({
    message: "Products retrieved successfully",
    count: products.length,
    data: products,
  });
}

//find a single product with an id
async function getProductById(req, res) {
  const product = await Product.findById(req.params.id);
  res.json({
    message: "product retrieved successfully",
    data: product,
  });
}

//update a product by the id in the request

//delete a product with the specified id in the request
async function deleteProduct(req, res) {
    await Product.findByIdAndDelete(req.params.id);
    res.json({
        message:"Product deleted successfully",
    })
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
};

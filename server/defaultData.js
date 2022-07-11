const products = require("./constants/data");
const Products = require("./model/product.model");
const DefaultData = async () => {
  try {
    await Products.insertMany(products);
    console.log("Data imported Successfully");
  } catch (err) {
    console.log("Error while inserting default data", err.message);
  }
};
module.exports = { DefaultData };

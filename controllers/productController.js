const Product = require("../models/Product");

getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.log("Error while loading products", error);
    res.status(500).json({ error: "Error while loading products" });
  }
};

getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log("Error while retrieving product", error);
    res.status(500).json({ error: "Error while retrieving product" });
  }
};

addProduct = async (req, res) => {
  const { name } = req.body;

  try {
    const newProduct = new Product({
      name: name,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    console.error("Error while adding product", error);
    res.status(500).json({ error: "Error while adding product" });
  }
};

updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, updates, {
      new: true, 
      runValidators: true, 
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product updated successfully!", product });
  } catch (error) {
    console.error("Error while updating product", error);
    res.status(500).json({ error: "Error while updating product" });
  }
};

deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error("Error while deleting product", error);
    res.status(500).json({ error: "Error while deleting product" });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};

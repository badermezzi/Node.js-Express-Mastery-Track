const Product = require('../models/product')

// Renders the "Add Product" page
exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", { pageTitle: "Add Product", path: "/admin/add-product" })
};

// Handles form submission to add a new product
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price) // Create a new product instance
    product.save() // Save the product
    res.redirect('/'); // Redirect to the homepage
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("admin/products", { prods: products, pageTitle: "Admin Products", path: "/admin/products" })
    })
};
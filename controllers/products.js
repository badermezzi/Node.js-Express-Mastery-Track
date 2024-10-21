const Product = require('../models/product')

// Renders the "Add Product" page
exports.getAddProduct = (req, res, next) => {
    res.render("add-product", { pageTitle: "Add Product", path: "/admin/add-product" })
};

// Handles form submission to add a new product
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title) // Create a new product instance
    product.save() // Save the product
    res.redirect('/'); // Redirect to the homepage
};

// Fetches all products and renders the "Shop" page
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop", { prods: products, pageTitle: "Shop", path: "/" })
    })
};

const path = require('path');

const express = require('express');

const productsController = require("../controllers/products");

const router = express.Router();

// Route to get all products
router.get('/', productsController.getProducts);

module.exports = router;

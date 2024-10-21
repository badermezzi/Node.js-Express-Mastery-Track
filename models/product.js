const fs = require("fs")
const path = require("path")

// Path to the products.json file
const p = path.join(path.dirname(require.main.filename), "data", "products.json")

// Helper function to read products from the file
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]); // Return an empty array if there's an error
        } else {
            cb(JSON.parse(fileContent)) // Parse and return the file content
        }
    })
};

module.exports = class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title // Initialize the product title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    // Save a product to the file
    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this) // Add the new product to the array
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err); // Log any errors
            })
        })
    }

    // Fetch all products
    static fetchAll(cb) {
        getProductsFromFile(cb)
    }

}

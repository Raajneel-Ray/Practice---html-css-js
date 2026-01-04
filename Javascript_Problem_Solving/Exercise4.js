/**Exercise 4: Track product stock levels
Problem:
You are working for an online retail company. Your task is to write a JavaScript program that tracks the stock levels of various products in the inventory. The program should check if a product is in stock and log an appropriate message.

Input details:

An array of objects representing products. Each object contains:
product: Name of the product (string)
stock: Number of units available in stock (integer)
Output details:

A message for each product indicating whether the product is in stock or out of stock.
Steps to implement:

Define an array of product objects with at least 3 sample products
Write a function checkStockLevels that takes this array as input
Use a loop to iterate through the array and check the stock level for each product
Print a message indicating if the product is "In Stock" or "Out of Stock" */

const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];
function checkStockLevels(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            console.log(`${products[i].product} is In Stock.`);
        } else {
            console.log(`${products[i].product} is Out of Stock.`);
        }
    }
}
checkStockLevels(products);
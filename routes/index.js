var express = require('express');

// we have to use router for all our methods
var router = express.Router();
// this line tells express that db is a method and by importing this it knows where to find it
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res) {
  res.send({ title: 'Express' });
});

// GET all the experiences without a filter
router.get('/experiences', async function(req, res) {
  let sql = `SELECT experience, info, amount, categoryID FROM experiences ORDER BY experience;`
  let data = await db(sql)
  res.send(data)
});

// GET all the experiences with filter category backpacker/budget/family 
//? I don't really know how I got this to work, but it does... but instead of the category ID I want it to change it to names
//* LEFT JOIN combines the information from the left table with the right
//? HOW can I join the tables so that I can type in the different categories on the url? or is it better to take care of this with React Router?
router.get('/experiences/:categoryID', async function(req, res) {
  // WHERE (the name of the database column) = ${req.params.category} has to match what we have in the path
  try {
    let sql = `SELECT experience, info, amount, categoryID FROM experiences LEFT JOIN categories ON experiences.categoryID=categories.id WHERE categoryID=${req.params.categoryID};`
    let data = await db(sql)
    res.status(200).send(data)
  } catch(err) {
    if (!data) res.status(404).send({error: err.message})
  }
  
  //TODO not so sure how I can connect it to the frontend where when they press the show more button -- fetch
});

// * need to get the item ID from the experiences table connected to the cart LEFT JOIN the two tables if the items match? then return the ID

// ADD to cart; needs to connect 
// ? How do I reflect that in the frontend that there are no items in the cart?
router.get('/cart/:id', async function(req, res) {
  
  let sql = `SELECT * FROM cart;`
  let data = await db(sql)
  res.status(200).send(data)
});

// DELETE from cart
router.get('/cart/:id', async function(req, res) {
  let sql = `DELETE * FROM cart;`
  let data = await db(sql)
  res.status(200).send(data)
});

// GET the cart page
// ? HOW to show that there are no items in the cart yet?
router.get('/cart', async function(req, res) {
    let sql = `SELECT item, quantity FROM cart;`
    let data = await db(sql)
    res.status(200).send(data)
});

module.exports = router;

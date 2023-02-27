var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getExperiences(req, res) {

}

/* GET home page. */
router.get('/', function(req, res) {
  res.send({ title: 'Express' });
});

// GET all the experiences without a filter
router.get('/experiences', async function(req, res) {
  let sql = `SELECT * FROM experiences;`
  let data = await db(sql)
  res.send(data)
});

// GET all the experiences with filter category backpacker/budget/family
router.get('/experiences/:category', async function(req, res) {
  // WHERE (the name of the database column) = ${req.params.category} has to match what we have in the path
  try {
    let sql = `SELECT experience, description, amount FROM experiences WHERE category=${req.params.category} ORDER BY experience;`
    let data = await db(sql)
    res.send(data)
  } catch(err) {
    if (!data) res.status(404).send({error: err})
  }
  
  //TODO not so sure how I can connect it to the frontend where when they press the show more button -- fetch
});

// GET the contact page
router.get('/contact', async function(req, res, next) {
    let sql = ``
    await db(sql)
});

module.exports = router;

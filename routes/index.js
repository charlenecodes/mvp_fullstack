var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getExperiences(req, res) {

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// GET all the experiences without a filter
router.get('/experiences', function(req, res, next) {
  db(`SELECT * FROM experiences`)
});

// GET all the experiences with filter category backpacker
router.get('/experiences/:category', function(req, res, next) {
  db(`SELECT * FROM experiences WHERE category=${req.params.categoryID}`)
  //TODO req.query.category (question mark) or req.params.category (with the colons) -- THINK OF IT LIKE THE ID
});

// GET the about page (stil need the slash)
router.get('/about', function(req, res, next) {
  
});

// GET the contact page
router.get('/contact', function(req, res, next) {
    
});

module.exports = router;

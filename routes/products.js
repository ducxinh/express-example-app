var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mobile', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];
  return res.json(products);
});

module.exports = router;

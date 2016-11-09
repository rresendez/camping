var express = require('express');

var router = express.Router();
//var bodyParser = require('body-parser');

var transactions = [];

/* GET users listing. */
router.get('/result', function(req, res, next) {
  //res.json(transactions);
  res.render('result', {transactions: transactions});
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.json(transactions);
  res.render('home');
});
/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.render('form.html');
});


router.post('/', function(req, res, next) {
  var description = req.body.description;
  var category = req.body.category;
  var priority = req.body.priority;



  var transaction = { description: description , category: category, priority: priority };
  transactions.push(transaction);

  res.render('home');
});

router.get('/balance', function(req, res, next) {
  var balance = 0;
  transactions.forEach(function(transaction){
    balance += Number(transaction.amount);
  });
  res.json(balance);
});

module.exports = router;

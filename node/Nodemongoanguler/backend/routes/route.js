var express = require('express');
var router = express.Router();
var category = require('../controller/categoryController.js');
var expense = require('../controller/expenseController.js');
var userController = require('../controller/userController.js');

router.get('/categories', category.getCategories);
router.post('/addCategories', category.addCategories);
router.put('/updateCategories/:id', category.updateCategories);
router.delete('/deleteCategories/:id', category.deleteCategories);


router.get('/expense', expense.getexpense);
router.post('/addExpense', expense.addExpense);
router.put('/updateExpense/:id', expense.updateExpense);
router.delete('/deleteExpense/:id', expense.deleteExpense);


router.get('/getUser', userController.getUser);
router.post('/addUser', userController.addUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);



module.exports = router
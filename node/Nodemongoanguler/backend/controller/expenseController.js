var expense = require('../model/expense.js');

exports.getexpense = (req, res, next) => {
    expense.find(function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
}

exports.addExpense = (req, res, next) => {
    let newExpense = new expense({
        categoryId:req.body.categoryId,        
        Id: req.body.Id,
        Name: req.body.Name,
        amount: req.body.amount,
        created_At: new Date,
        updated_At: new Date
    });

    newExpense.save((err, item) => {
        if (err) {
            res.json(err)
        } else {
            res.json({
                msg: "expense added successfully"
            })
        }

    })
}


exports.updateExpense = (req, res, next) => {
    expense.findOneAndUpdate({
        "Id": req.params.id
    }, {
        $set: {
            Name: req.body.Name,
            updated_At: new Date
        }
    }, function (err) {
        if (err) {
            res.json(err)
        } else {
            res.json({
                msg: "expense updated successfully"
            })
        }
    })
}

exports.deleteExpense = (req, res, next) => {
    expense.remove({
        "Id": req.params.id
    }, function (err) {
        if (err) {
            res.json(err)
        } else {
            res.json({
                msg: "deleted successfully"
            })
        }
    })
}
var category = require('../model/category.js');

exports.getCategories = (req, res, next) => {
    category.find(function (err, category) {
        if (err) {
            res.json(err);
        } else {
            res.json(category);
        }
    })
}

exports.addCategories = (req, res, next) => {
    let newCategory = new category({
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName,
        created_At: new Date,
        updated_At: new Date
    });

    newCategory.save((err, item) => {
        if (err) {
            res.json(err)
        } else {
            res.json({
                msg: "category added successfully"
            })
        }

    })
}


exports.updateCategories = (req, res, next) => {
    category.findOneAndUpdate({
        "categoryId": req.params.id
    }, {
        $set: {
            categoryName: req.body.categoryName,
            updated_At: new Date
        }
    }, function (err) {
        if (err) {
            res.json(err)
        } else {
            res.json({
                msg: "category updated successfully"
            })
        }
    })
}

exports.deleteCategories = (req, res, next) => {
    category.remove({
        "categoryId": req.params.id
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
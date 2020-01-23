var user = require("../model/user.js");



exports.getUser = (req, res, next) => {
    user.find(function (err, data) {
        if (err) {
            err.json(err);
        } else {
            res.json(data);
            console.log(data);
        }
    })
}


exports.addUser = (req, res, next) => {
    let newUser = new user({
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        loginName: req.body.loginName,
        password: req.body.password,
        role: req.body.role,
        status: req.body.status,
        gender: req.body.gender

    });
    console.log(newUser);
    newUser.save((err, iteam) => {
        if (err) {
            res.json(err);
        } else {
            res.json({
                msg: "user added successfully "
            });
        }
    })
}

exports.updateUser = (req, res, next) => {
    user.findOneAndUpdate({
            "id": req.params.id
        }, {
            $set: {
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                loginName: req.body.loginName,
                password: req.body.password,
                role: req.body.role,
                status: req.body.status,
                gender: req.body.gender
            }
        },
        function (err) {
            if (err) {
                res.json(err);
            } else {
                res.json({
                    msg: "update successfully"
                })
            }

        })
}

exports.deleteUser = (req, res, next) => {
    user.remove({
            "id": req.params.id
        },
        function (err) {
            if (err) {
                res.json(err);
            } else {
                res.json({
                    msg: "delete successfully"
                });
            }
        }

    )
}
var express = require("express");
var mongoose = require("mongoose");
var routes = require("./backend/routes/route")
var bodyparser = require('body-parser');
var cors = require("cors");
var app = express();
app.listen(3001);
console.log("server connected");


mongoose.connect('mongodb://localhost:27017/ems', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("db connected on 27017");
})

mongoose.connection.on('error', (error) => {
    console.log(error);
})
app.use(cors());
app.use(bodyparser.json());
app.use("/routes", routes);


module.exports = app;
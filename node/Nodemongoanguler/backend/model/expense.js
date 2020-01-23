const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    categoryId:{
        type: mongoose.Schema.Types.String,
        ref:"category.categoryId" 
    },
    Id: {
        type: String,
        required: true
    },
   Name: {
        type: String,
        required: true
    },
   amount: {
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        default: Date.now
    },
    updated_At: {
        type: Date,
        default: Date.now
    },
});

const expense = mongoose.model('expense', expenseSchema);
module.exports = expense;
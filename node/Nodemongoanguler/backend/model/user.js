const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    loginName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    }
})
const user = mongoose.model('user', userSchema);
module.exports = user;
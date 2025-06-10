const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    category:{
        type:String,
        required:[true,'Category is required']
    },
    subCategory:{
        type:String,
        required:[true,'Subcategory is required']
    },
    status:{
        type:String,
        required:[true,'Status is required']
    },
    description:{
        type:String,
        required:[true,'Description is required']
    },
    imgPath:{
        type:String,
        required:[true,'Image Path is required']
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    }
},{timestamps:true})

module.exports = mongoose.model('MenuItem',menuSchema);
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_id:{
        type:String,
        required:false
    },
    brand_name:{
        type:String,
        required:false
    },
    product_count:{
        type:String,
        required:false
    },
    thumbnail:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:false
    },
    created_by:{
        type:String,
        required:false
    },
    created_on:{
        type:String,
        required:false
    }
});   

module.exports = mongoose.model("brand", brandSchema); 



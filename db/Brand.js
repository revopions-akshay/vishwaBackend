const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_id:String,
    brand_name:String,
    product_count:String,
    thumbnail:String,
    status:String,
    created_by:String,
    created_on:String
});   

module.exports = mongoose.model("brand",brandSchema); 
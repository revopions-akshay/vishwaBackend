const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_id:String,
    sub_category_count:String,
    sort:String,
    category_name:String,
    thumbnail:String,
    status:String,
    created_by:String,
    created_on:String
});   

module.exports = mongoose.model('category', categorySchema); 




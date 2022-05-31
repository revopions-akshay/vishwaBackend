const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  

    thumbnail: {
        type: String
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
    sub_category: {
        type: String
    },
    sub_category_type: {
        type: String
    },
    gst: {
        type: String
    },
    type: {
        type: String
    },
    quality: {
        type: String
    },
    size: {
        type: String
    },
    status: {
        type: String
    },
    product_name: {
        type: String
    },
    mrp: {
        type: String
    },
    dp: {
        type: String
    },
    total: {
        type: String
    },
    discountgross: {
        type: String
    },
    discountnet: {
        type: String
    },
    discountonmrp: {
        type: String
    },
    hsn: {
        type: String
    },
    code: {
        type: String  
    },
    quantity: {
        type: String
    },
    gstrate: {
        type: String
    },
    margin: {
        type: String
    },
    customernetrate: {
        type: String
    },
    includingtax: {
        type: String
    },
    customergrossdiscount: {
        type: String
    },
    customernetdiscount: {
        type: String
    },
    shipping: {
        type: String
    },
    created_by: {
        type: String
    },
    created_on: {
        type: Date,
        default: Date.now,
    },
    updated_on: {
        type: Date,
        default: Date.now,
    }

  
});

module.exports = mongoose.model('product', productSchema); 









// {
//     "thumbnail" : "string",
//     "brand_id" : "string",
//     "category_id" : "string",
//     "sub_category" : "string",
//     "sub_category_type" : "string",
//     "gst_id" : "string",
//     "type" : "string",
//     "quality" : "string",
//     "size" : "string",
//     "status" : "string",
//     "product_name" : "string",
//     "mrp" : "string",
//     "dp" : "string",
//     "total" : "string",
//     "discountgross" : "string",
//     "discountnet" : "string",
//     "discountonmrp" : "string",
//     "hsn" : "string",
//     "code" : "string",
//     "quantity" : "string",
//     "gstrate" : "string",
//     "margin" : "string",
//     "customernetrate" : "string",
//     "includingtax" : "string",
//     "customergrossdiscount" : "string",
//     "customernetdiscount" : "string",
//     "shipping" : "string",
//     "created_by" : "string",
//     "created_on" : "string",
//     "updated_on" : "string"
//     }
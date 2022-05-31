const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  

    media: {
        type: String
    },
    
    actual: {
        type: String
    },
    
    thumbnail: {
        type: String
    }

  
});

module.exports = mongoose.model('images', mediaSchema); 
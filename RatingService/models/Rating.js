
const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    driverName:{
        type: String,
    },
    car:{
        type: String,
    },
    rating:{
        type:Number,
    }

})

module.exports = mongoose.model('Rating', schema)
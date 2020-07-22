


const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const gainedPointsSchema = mongoose.Schema({
    _id: { 
        type : Number , required : true
    },
    gainedPointType : { 
        type: String, required : true
    },
    OrederId : {
         type : String, required : true 
        },
    BuyerId : {
         type : String, required : true 
        },
 
    
    Buyer : [{
        type : Schema.Types.ObjectId,
        ref : 'Buyer',
        required : false
    }]

});

module.exports = mongoose.model('GainPoints', gainedPointsSchema);
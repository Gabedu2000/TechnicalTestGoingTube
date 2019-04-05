const mongoose = require('mongoose');

const {Schema} = mongoose;

const TripSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    carBrand: {type: String, required: false},
    carModel: {type: String, required:false},
    carPlate: {type: String, required: false},
    description: {type: String, required: false},
    baggages: {type: String, required: true},
    quota: {type: String, required: true},
    cost: {type: String, required: true}
});

module.exports = mongoose.model('Trip', TripSchema);
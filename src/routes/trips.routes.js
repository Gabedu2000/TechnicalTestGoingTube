const express = require('express');
const router = express.Router();

const Trip = require('../models/trip');

router.get('/', async (req,res) => {
    const trips = await Trip.find();
    res.json(trips);
});

router.post('/',async (req,res) => {
    const {from,to,carBrand,carModel,carPlate,description,baggages,quota,cost} = req.body;
    const trip = new Trip({from,to,carBrand,carModel,carPlate,description,baggages,quota,cost});
    await trip.save();
    res.send(200);
});

router.put('/:id',async (req,res) =>{
    const {from,to,carBrand,carModel,carPlate,description,baggages,quota,cost} = req.body;
    const newTrip = {from,to,carBrand,carModel,carPlate,description,baggages,quota,cost};
    await Trip.findByIdAndUpdate(req.params.id , newTrip);
    res.send(200);
})

router.delete('/:id',async (req,res) => {
    await Trip.findByIdAndDelete(req.params.id);
    res.send(200);
})

module.exports = router;
const express = require("express");
const Book = require('../models/booking'); 
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const { bookingid,roomtype, arrivaldate, departuredate } = req.body;
        const newBook = await Booking.create({ bookingid,roomtype, arrivaldate, departuredate});
        res.status(201).send(newBooking);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.get('/get', async (req, res) => {
    try {
        const booking = await Booking.findOne({ title: req.query.title });
        if (!booking) {
            return res.status(404).send({ message: "Booking not found" });
        }
        res.send(booking);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { id, ...updatedFields } = req.body;
        const booking = await Booking.updateOne({ _id: id }, { $set: updatedFields });
        if (booking.nModified === 0) {
            return res.status(404).send({ message: "Booking not found or no changes made" });
        }
        res.send({ message: "Booking updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        const booking = await Booking.deleteOne({ _id: id });
        if (booking.deletedCount === 0) {
            return res.status(404).send({ message: "Booking not found" });
        }
        res.send({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
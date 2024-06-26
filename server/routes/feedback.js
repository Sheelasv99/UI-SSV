const express = require("express");
const Feedback = require('../models/feedback'); 
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const { feedbackid, feedback, rating } = req.body;
        const newFeedback = await Feedback.create({ feedbackid, feedback, rating});
        res.status(201).send(newFeedback);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.get('/get', async (req, res) => {
    try {
        const feedback = await Feedback.findOne({ title: req.query.title });
        if (!feedback) {
            return res.status(404).send({ message: " not found" });
        }
        res.send(feedback);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { id, ...updatedFields } = req.body;
        const feedback = await Feedback.updateOne({ _id: id }, { $set: updatedFields });
        if (feedback.nModified === 0) {
            return res.status(404).send({ message: "feedback not found or no changes made" });
        }
        res.send({ message: "feedback updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        const feedback = await Feedback.deleteOne({ _id: id });
        if (feedback.deletedCount === 0) {
            return res.status(404).send({ message: "feedback not found" });
        }
        res.send({ message: "feedback deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
const mongoose = require("mongoose");


const feedbackSchema = new mongoose.Schema({
    feedbackid: [String],
    feedback:String,
    rating: String,
    
    
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});


const Feedback = mongoose.model("feedback", feedbackSchema);


async function createFeedback(feedbackid,feedback, rating) {
    const newFeedback = await Feedback.create({
        feedbackid: [String],
    feedback:String,
    rating: String,
   
    });
    return newFeedback;
}


async function getFeedback(feedbackid,feedback) {
    return await feedback.findOne({ "feedback": feedback,"feedbackid":feedbackid });
}


async function updateFeedback(feedbackid,id, updatedFields) {
    const feedback = await Feedback.updateOne({ "_id": id,"feedbackid": feedbackid }, { $set: updatedFields });
    return feedback;
}


async function deleteFeedback(feedbackid,id) {
    await feedback.deleteOne({ "_id": id,"feedbackid": feedbackid });
}


module.exports = { createFeedback, updateFeedback, deleteFeedback };
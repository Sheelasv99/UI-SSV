const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    bookingid: [String],
    roomtype:String,
    arrivaldate: String,
    departuredate: String,
    
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});


const Booking = mongoose.model("Booking", bookingSchema);


async function createBooking(bookingid,roomtype, arrivaldate, departuredate) {
    const newBooking = await Booking.create({
        bookingid:bookingid,
        roomtype:roomtype,
        arrivaldate: arrivaldate,
        departuredate: departuredate
        
    });
    return newBooking;
}


async function getBooking(bookingid,roomtype) {
    return await Book.findOne({ "roomtype": roomtype,"bookingid":bookingid });
}


async function updateBooking(bookingid,id, updatedFields) {
    const booking = await Booking.updateOne({ "_id": id,"bookingid": bookingid }, { $set: updatedFields });
    return booking;
}


async function deleteBooking(bookingid,id) {
    await Booking.deleteOne({ "_id": id,"bookingid": bookingid });
}


module.exports = { createBooking, getBooking, updateBooking, deleteBooking };
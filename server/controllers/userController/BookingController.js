    const Booking = require("../../models/BookingModel");

    exports.postBooking = (req, res) => {
    try {
        const resortId = req.params.resortId;
        const bookingData = req.body;

        console.log("resortId:", resortId);
        console.log("bookingData:", bookingData);
    
    } catch (error) {}
    };

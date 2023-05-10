const Owner = require("../../models/ownerModel");
const Resort = require('../../models/resortModel')
const { createToken} = require('../../middlewares/tokenAuth');

exports.registerResort = async(req,res)=>{
    try {
        // Create a new resort object with the provided form data
        const newResort = new Resort({
          name: req.body.name,
          location: req.body.location,
          description: req.body.description,
          owner: req.body.userId, // Assign the owner's ID to the resort's owner field
          status: "pending", // Set the initial status to "pending"
        });
    
        // Save the new resort to the database
        const savedResort = await newResort.save();
    
        res.send({
          success: true,
          message: "Resort registered successfully",
          data: savedResort,
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
}
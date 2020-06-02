const mongoose = require("mongoose");
// shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: Date
}, {
        timestamps: true
    
})

const flightSchema = new Schema({
    airline: String,
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999 
    },
    departs: {
        type: Date,
        default: function () {
          const dt = new Date();
          return dt.setFullYear(dt.getFullYear() + 1);
        }
      },
    destinations: [destinationSchema],
} ,{
        timestamps: true
    
});

module.exports = mongoose.model("Flight", flightSchema );



const mongoose = require("mongoose");

const Schema = mongoose.Schema

const trackWorkout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
})
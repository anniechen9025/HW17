//TODO Check with Brain about my set up
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },    
    exercises: {
        type: String,
        trim: true,
        required: "Enter exercises for transaction",
    },
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;

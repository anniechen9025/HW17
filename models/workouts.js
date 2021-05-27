//TODO Need to modify the Model to my needed
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for transaction",
    },
    value: {
        type: Number,
        required: "Enter an amount",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;

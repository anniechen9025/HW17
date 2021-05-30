const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter exercises type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter exercises name"
            },
            duration: {
                type: Number,
                required: "Enter exercises duration"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }],
},
{
    toJSON:{
        virtuals: true
    }
}
);


workoutsSchema.virtual('totalDuration').get(function(){
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration;
    },0)
})

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;

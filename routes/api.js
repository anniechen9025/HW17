const router = require("express").Router();
const Workouts = require("../models/workouts.js");

// TODO: Page render routes(how to set the links to different HTML)
//! CONTINUE WORKOUT??('/exercise?')
router.get("/exercise",(req,res)=>{
    res.render('exercise')
});

router.get("/stats",(req,res)=>{
    res.render('stats')
});


//* Function apis
// TODO: how to find the most recently
router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        // .sort({ day: -1 })
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body }, res) => {
    Workouts.create(body)
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workouts.insertMany(body)
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Transaction.find({})
        .sort({ date: -1 })
        .then((dbTransaction) => {
            res.json(dbTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


module.exports = router;

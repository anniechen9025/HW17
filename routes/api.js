const router = require("express").Router();
const Workouts = require("../models/workouts.js");


//* Function apis
// TODO: how to find the most recently
router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workouts.findByIdAndUpdate(params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workouts.create({})
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
        .limit(7)
        .then((dbTransaction) => {
            res.json(dbTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

//* aggregate way of added up object (another way show in the model js)
//* CHART SOURCE: D3.JS
// router.get("/api/happy", (req, res) => {
//     Workouts.aggregate(
//         [
//             {
//                 $addFields: {
//                     totalDuration:{
//                         $sum:'$exercises.duration'
//                     }
//                 }
//             }
//         ]
//     ).then((dbWorkouts) => {
//             res.json(dbWorkouts);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;

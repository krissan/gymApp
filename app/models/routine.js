var mongoose = require('mongoose');

var SubRoutineSchema = new mongoose.Schema({
    setExercise: String,
    repAmount: {
        type: Number
    },
    setTime: {
        type: Number
    }
}, {
    timestamps: true
});
 
var RoutineSchema = new mongoose.Schema({
    routine: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    sets: [SubRoutineSchema],
    userid: String
}, {
    timestamps: true
});

const Routine = mongoose.model('Routine', RoutineSchema);
const SubRoutine = mongoose.model('SubRoutine', SubRoutineSchema);
module.exports = { Routine, Subroutine };
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

var Routine = mongoose.model('Routine', RoutineSchema);
var SubRoutine = mongoose.model('SubRoutine', SubRoutineSchema);
module.exports = { Routine: Routine, SubRoutine: SubRoutine };
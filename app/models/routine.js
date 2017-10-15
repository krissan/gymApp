var mongoose = require('mongoose');

/*var SetSchema = new mongoose.Schema({
    setName: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    }
}, {
    timestamps: true
});*/

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
module.exports = {Routine, SubRoutine};
//module.exports = mongoose.model('SetExercise', SetSchema);
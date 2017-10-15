var mongoose = require('mongoose');
var Routine = require('../models/subroutine');
 
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

module.exports = mongoose.model('Routine', RoutineSchema);
//module.exports = mongoose.model('SetExercise', SetSchema);
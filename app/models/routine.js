var mongoose = require('mongoose');
 
var RoutineSchema = new mongoose.Schema({
 
    routine: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    sets: [SubRoutineSchema]
}, {
    timestamps: true
});

var SubRoutineSchema = new mongoose.Schema({
    set: SetSchema,
    repAmount: {
        type: Array
    },
    setTime: {
    	type: Number
    },
    restTime: {
    	type: Number
    } 
}, {
    timestamps: true
});
 
var SetSchema = new mongoose.Schema({
    set: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Routine', RoutineSchema);
module.exports = mongoose.model('SubRoutine', SubRoutineSchema);
module.exports = mongoose.model('Set', SetSchema);
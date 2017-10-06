var Routine = require('../models/Routine');
 
exports.getRoutine = function(req, res, next){
 
    Routine.find(function(err, routines) {
 
        if (err){
            res.send(err);
        }
 
        res.json(routines);
 
    });
 
}
 
exports.createRoutine = function(req, res, next){
 
    Routine.create({
        routine : req.body.routine,
        routine : req.body.sets

    }, function(err, routine) {
 
        if (err){
            res.send(err);
        }
 
        Todo.find(function(err, routines) {
 
            if (err){
                res.send(err);
            }
 
            res.json(routines);
 
        });
 
    });
 
}
 
exports.deleteRoutine = function(req, res, next){
 
    routine.remove({
        _id : req.params.routine_id
    }, function(err, routine) {
        res.json(routine);
    });
 
}


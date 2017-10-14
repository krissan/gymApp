var Routine = require('../models/routine');
 
exports.getRoutine = function(req, res, next){
 
    Routine.find({
        userid : req.params.user_id
    }, function(err, routines) {
 
        if (err){
            res.send(err);
        }
 
        res.json(routines);
 
    });
 
}
 
exports.createRoutine = function(req, res, next){
 
    Routine.create({
        routine : req.body.routine.routineName,
        sets : req.body.routine.subroutines,
        userid: req.body.routine.userid
    }, function(err, routine) {
 
        if (err){
            res.send(err);
        }
 
        Routine.find(function(err, routines) {
 
            if (err){
                res.send(err);
            }
 
            res.json(routines);
 
        });
 
    });

}
 
exports.deleteRoutine = function(req, res, next){
 
    Routine.remove({
        _id : req.params.routine_id
    }, function(err, routine) {
        res.json(routine);
    });
 
}


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
    // var subroutTemp;
    // for (subrout in req.body.subroutines)
    // {
    //     subroutTemp = {}
    // }

    Routine.create({
        routine : req.body.routineName,
        sets : req.body.subroutines,
        userid: req.body.userid
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


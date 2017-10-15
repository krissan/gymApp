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
    var subrouts = Array.from(req.body.subroutines);
    var readSubrouts = [];
    for (subrout in subrouts)
    {
        
    }

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
 
            res.json(routines + JSON.stringify(req.body.routineName[0]) ++ "++" ++ a);

 
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


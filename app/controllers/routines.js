var mongoose = require('mongoose');
var models = require('../models/routine');
 
exports.getRoutine = function(req, res, next){
 
    models.Routine.find({
        userid : req.params.user_id
    }, function(err, routines) {
 
        if (err){
            res.send(err);
        }
 
        res.json(routines);
 
    });
 
}
 
exports.createRoutine = function(req, res, next){
    models.Routine.create({
        routine : req.body.routineName,
        sets : req.body.subroutines,
        userid: req.body.userid
    }, function(err, routine) {
 
        if (err){
            res.send(err);
        }
 
        models.Routine.find(function(err, routines) {
 
            if (err){
                res.send(err);
            }
 
            res.json(routines + JSON.stringify(req.body));
        });
    });
}
 
exports.deleteRoutine = function(req, res, next){
    models.Routine.remove({
        _id : req.params.routine_id
    }, function(err, routine) {
        res.json(routine);
    });
}


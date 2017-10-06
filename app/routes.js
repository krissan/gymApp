var AuthenticationController = require('./controllers/authentication'), 
    RoutineController = require('./controllers/routines'), 
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        routineRoutes = express.Router();
 
    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
 
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
 
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });
 
    // Todo Routes
    apiRoutes.use('/routines', routineRoutes);
 
    routineRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['normal','super']), routineController.getRoutines);
    routineRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['normal','super']), routineController.createRoutine);
    routineRoutes.delete('/:routine_id', requireAuth, AuthenticationController.roleAuthorization(['normal','super']), RoutineController.deleteRoutine);
 
    // Set up routes
    app.use('/api', apiRoutes);
 
}
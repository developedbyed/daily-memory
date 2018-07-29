const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

    app.get('/auth/google/callback',passport.authenticate('google'));

    app.get('/current_user',(req,res)=>{
        res.json(req.user);
        console.log(req.user);
    });
    app.get('/logout',(req,res)=>{
        req.logout();
        res.send(req.user);
    });
}

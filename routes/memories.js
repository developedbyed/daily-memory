const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');
const Memory = mongoose.model('memories');

module.exports = (app)=> {
    app.get('/memories',(req,res)=>{
        res.json(req.user.id);
     });
     
     app.post('/memories',(req,res)=>{
        new Memory({
            postTitle:req.body.title,
            postStory: req.body.story,
            _user: req.user.id
        }).save()
            .then(savedMemory=>console.log(savedMemory));
     });
     
}


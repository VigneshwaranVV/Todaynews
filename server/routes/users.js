var express = require('express');
var router = express.Router();
var user=require('../models/usermodal');

var passport = require('passport');

  router.post("/add",function(req,res) {
    if(req.body) {
    var uservar=new user();
    uservar.username=req.body.username;
    uservar.password=req.body.password;
    uservar.save(function(err){
    if(err) {
      res.send(err);
    }
    else  {
    res.send("inserted");
    }
      });
    }
    });

router.delete("/delete",function(req,res){
    var request=req.body.username;
    if(request)
    {
      user.remove({username:request},function(err){
        if(err) {
          res.send(err);
        }
        else  {
        res.send("The user was deleted");
        }
      });
    }
  });

router.get('/', function(req, res, next) {
    user.find({},function(err,alluser){
      if(err) {
        res.send(err);
        console.log('error ocuured');
      }
      else {
       var user={};
        alluser.forEach(function(users,ind){
          user[users._id]=users;
          
        });
        res.send(user);
      }
    });
  });
module.exports = router;
const express = require('express');
var myProfile = express.Router();
myProfile.use(express.json())
const add = require("../model/my_profile_db");

myProfile.get("/show_profile",function(req,res){
    let response = add.showProfile()
    response.then((data)=>{
        
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports=myProfile


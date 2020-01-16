const express = require('express');
var user = express.Router();
user.use(express.json())
const add = require("../model/userSignUp");
const jwt = require('jsonwebtoken')

user.post("/signUp",function(req,res){
    let userDetails={name:req.body.name,
        email_id:req.body.email_id,
        password:req.body.password
    }
    let response = add.userData(userDetails)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
user.get("/login",function(req,res){
    let email_id=req.body.email_id
    let password=req.body.password
    let response=add.login()
    response.then((data)=>{
        for(var i=0; i<data.length; i++){
            if(data[i]["email_id"]==email_id && data[i]["password"]==password){
                let token = jwt.sign({"user":data},"bulbul")
                res.cookie(token)
                res.json({token})
            }
            else{
                res.send("incorect password")
            }
        }
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = user
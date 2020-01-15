const express = require('express');
var signUp = express.Router();
signUp.use(express.json())
const add = require("../model/userSignUp");
const jwt = require('jsonwebtoken')

signUp.post("/signUp",function(req,res){
    let userDetails={name:req.body.name,
        email_id:req.body.email_id,
        password:req.body.password
    }
    let response = add.userData(userDetails)
    response.then((data)=>{
        let token = jwt.sign({"user":data},"bulbul")
        res.cookie(token)
        res.json({token})
    }).catch((err)=>{
        res.send(err)
    })
})
module.exports = signUp
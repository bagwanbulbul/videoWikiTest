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
    let response=add.login(email_id)
    response.then((data)=>{
        if(data.length==0){
            res.send("your email is incorect please try again...")
        }
        else if(data[0]["password"]==password){
            let token = jwt.sign({"user":data[0]},"secret_key")
            res.cookie(token)
            jwt.verify(token,"secret_key",(err,result)=>{
                res.json({"status":"write","massage":"login successful ","token":result})
            }) 
            
        }
        else{
            res.send("your password is incorect try again....")
        }
        
    }).catch((err)=>{
        res.send(err)
    })
})



module.exports = user
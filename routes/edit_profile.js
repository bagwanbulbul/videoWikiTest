const express = require('express');
var editProfile = express.Router();
editProfile.use(express.json())
const add = require("../model/edit_profile_db");

editProfile.post("/edit_profile",function(req,res){
    let userProfile={
        phone_number:req.body.phone_number,
        email_id:req.body.email_id,
        birth_date:req.body.birth_date,
        education:req.body.education,
        address:req.body.address
    }
    let response=add.profile(userProfile)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
editProfile.put("/update_profile/:id",function(req,res){
    let id = req.params.id
    let edit = req.body
    let response=add.updateProfile(edit,id)
    response.then((data)=>{
        res.json({status:"write",massage:"profile updated"})
    }).catch((err)=>{
        res.send(err)
    })
})
editProfile.get("/my_profile/:id",function(req,res){
    let id = req.params.id
    let response=add.seeProfile(id)
    response.then((data)=>{
        res.json({status:"write",profile:data})
    }).catch((err)=>{
        res.send(err)
    })
})
editProfile.delete("/edit_information/:id",function(req,res){
    let id=req.params.id
    let edit = req.body
    let response = add.deleteinformation(edit,id)
    response.then((data)=>{
        res.json({status:"write",masage:"delete infoemation"})
    })
})

module.exports = editProfile
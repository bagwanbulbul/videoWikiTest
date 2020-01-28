const express = require('express');
var creat_post = express.Router();
creat_post.use(express.json())
const add = require("../model/post_db");

creat_post.post("/creat_post",function(req,res){
    let userPost = {post:req.body.post,
        caption:req.body.caption
    }
    let response=add.userPostData(userPost)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
creat_post.post("/post_likes",function(req,res){
    let likes= {
        user_id:req.body.user_id,
        post_id:req.body.post_id,
        likes:req.body.likes,
        comments:req.body.comments
    }
    let response=add.postLikes(likes)
    response.then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})
creat_post.get("/count_likes/:post_id",function(req,res){
    let post_id=req.params.post_id
    let response=add.countLikes(post_id)
    response.then((data)=>{
        var count = 0;
        for(var i=0; i<data.length; i++){
            if(data[i]["likes"]==true){
                count=count+1
            }
        }
        res.json({"status":"write","likes":count})
    }).catch((err)=>{
        console.log(err)
    })

})

module.exports = creat_post
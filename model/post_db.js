const knex = require("../conection.js")
let userPostData = (userPost)=>{
    return knex.select("*").from("create_post").insert(userPost)
}

let postLikes=(likes)=>{
    return knex.select("*").from("likes").insert(likes)
}
let countLikes=(post_id)=>{
    return knex.select("*").from("likes").where("post_id",post_id)
}
module.exports={ userPostData,postLikes,countLikes}

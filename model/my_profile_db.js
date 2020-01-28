const knex = require("../conection.js")

let showProfile=()=>{
    return knex
    .select("create_post.post","create_post.caption","likes.likes","likes.comments")
    .from("likes").join("create_post","create_post.post_id","likes.post_id")
}

module.exports={showProfile}
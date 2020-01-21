const knex = require("../conection.js")
let userData = (userDetails)=>{
    return knex.select("*").from("register").insert(userDetails)
}
let login=(email_id)=>{
    return knex.select('*').from('register').havingIn('email_id',email_id)

}
let userPostData = (userPost)=>{
    return knex.select("*").from("creat_post").insert(userPost)
}

let postLikes=(likes)=>{
    return knex.select("*").from("post_likes").insert(likes)
}

module.exports={userData,login,userPostData,postLikes}
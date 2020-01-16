const knex = require("../conection.js")
let userData = (userDetails)=>{
    return knex.select("*").from("register").insert(userDetails)
}
let login=()=>{
    // return knex.select("*").from("register")
    return knex.select("*").from("register")
}

module.exports={userData,login}
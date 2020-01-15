const knex = require("../conection.js")
let userData = (userDetails)=>{
    return knex.select("*").from("register").insert(userDetails)
}

module.exports={userData}
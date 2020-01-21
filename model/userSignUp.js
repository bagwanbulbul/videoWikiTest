const knex = require("../conection.js")
let userData = (userDetails)=>{
    return knex.select("*").from("register").insert(userDetails)
}
let login=(email_id)=>{
    return knex.select('*').from('register').havingIn('email_id',email_id)

}

module.exports={userData,login}
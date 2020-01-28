const knex = require("../conection.js")

let profile=(userProfile)=>{
    return knex("edit_profile").insert(userProfile)
}

let updateProfile=(edit,id)=>{
    return knex("edit_profile").where("id",id).update(edit)
}

let seeProfile=(id)=>{
    return knex.select("*").from("edit_profile").where("id",id)
}
let deleteinformation=(edit,id)=>{
    return knex.select("*").from("edit_profile").where("id",id).del(edit)
}

module.exports={profile,updateProfile,seeProfile,deleteinformation}
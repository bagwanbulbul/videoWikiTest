const express = require('express');
const app =express();
const signUp = require('../routes/signUp');
app.use("/user",signUp);



app.listen(5500,()=>{
    console.log("server is listening 5500 ....")

});
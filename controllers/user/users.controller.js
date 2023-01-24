const express = require("express");
const userModel = require("")

async function createUser(req,res){
    console.log(req.body);
    console.log(User)
    res.status(200).json({
        "status" : 200,
        "message" : "User Logged in successfully",
        "data" : req.body,
    });
}


module.exports = {
    createUser : createUser,
}
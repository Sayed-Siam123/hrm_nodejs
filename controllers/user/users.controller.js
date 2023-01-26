const express = require("express");

async function createUser(req,res){
    console.log(req.body);

    res.status(200).json({
        "status" : 200,
        "message" : "User Logged in successfully",
        "data" : [""],
    });
}


module.exports = {
    createUser : createUser,
}

const express = require("express");
const {User} = require("../../models");
async function createUser(req,res){
    console.log(req.body);
    const user = await User.findAll();
    if (user.length === 0) {
        res.status(400).json({
            "status" : 200,
            "message" : "User not found",
            "data" : [""],
        });
    }
    else{
        console.log(user);
        res.status(200).json({
            "status" : 200,
            "message" : "User Logged in successfully",
            "data" : [""],
        });
    }
}


module.exports = {
    createUser : createUser,
}

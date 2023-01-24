const express = require("express");

async function createUser(req,res){
    console.log(req.body);
}


module.exports = {
    createUser : createUser,
}
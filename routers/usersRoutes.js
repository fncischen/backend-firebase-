let users = require("../data/users/users.js");
let express = require("express");
let server = express.Router();

let fb = require("../middleware/firebaseMiddleware.js");

server.post("/register", fb.isAuthenticated, (req,res) =>{
    let {username, password, user_firebase_id} = req.body.user;

    if (!username | !password | !user_firebase_id) {
        return res.status(404).json({
            status: 404,
            message: "You are missing a username, password, or firebase id."
        }) 
    }
    else{
        users.createUser(user)
        .try(
            response => {
                response => {
                    let createddUser = response.data;
                    res.status(202).json(createddUser);
                }
            }
        )
        .catch(
            error => {
                res.status(500).json({message: error})
            }
        )
    }

})

server.get("/login", fb.isAuthenticated, (req,res) =>{
    let {username, password, user_firebase_id} = req.body.user;

    if (!username | !password | !user_firebase_id) {
        return res.status(404).json({
            status: 404,
            message: "You are missing a username, password, or firebase id."
        }) 
    }
    else{
        users.getUserByFirebaseId(user_firebase_id)
        .try(
            response => {
                let returnedUser = response.data;
                res.status(202).json(returnedUser);
            }
        )
        .catch(
            error => {
                res.status(500).json({message: error})
            }
        )
    }

})

module.exports = server; 
const db = require("../dbConfig.js");

function createUser(user){
    return db("users")
    .insert(user);
}

function getUserByFirebaseId(user){
    let {username, password, user_firebase_id} = user;

    return db("users")
        .where({user_firebase_id})
        .first();

}

module.exports = { createUser, getUserByFirebaseId};
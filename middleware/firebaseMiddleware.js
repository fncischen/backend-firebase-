let firebase = require("../firebase/firebaseConfig.js");

// to check the property of the token

async function isAuthenticated(req, res, next) {

    // authorization token has to always be in the headers. 
    const authToken = req.headers.authorization; 

    console.log("Our auth token:", authToken);

    if(!authToken){
        res.status(403).json({ErrorMessage: "Forbidden"})
    }
    else{
        firebase.auth().verifyIdToken(authToken)
        .then(function(decodedToken) {
        var uid = decodedToken.uid;
        // ...
        console.log("This token is correct");
        req.firebaseid = uid; 
        next();
         }).catch(function(error) {
            console.log("This token is incorrect");
            res.status(500).json({
                error
            })
        });
    }
}
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require('express');
const app = express();
app.get("/getTest", (req, res) => {
    res.send("Hello World\n Express with Firebase");
});
exports.firstFunction = functions.https.onRequest(app);




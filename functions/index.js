
const { onRequest } = require("firebase-functions/v2/https");
const functions = require('firebase-funtions')
const logger = require("firebase-functions/logger");
const express = require('express')
const cors = require('cors')
const app = express()

//Routes
app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello World')
})

//Create



exports.app = functions.https.onRequest(app)

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

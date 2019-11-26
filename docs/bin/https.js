/*
environmentals.js

A simple file allowing https traffic on localhost. this allows testing of
services and components that require a secure connection....

Eric Foster
*/


// Get https....
const app = require("https-localhost")()

// Serve this directory on 8000....
app.serve('./', 8000)

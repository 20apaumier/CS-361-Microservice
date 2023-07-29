// Set up a server and whenever a get request is sent, return the current ISOString time.

const express = require('express');
const app = express();
const PORT = 6116;

function getCurrentTime() {
    return new Date().toISOString();
}

app.get('/', function(req, res) {
    res.send(getCurrentTime());
});

app.listen(PORT, function (err) {
    if (err) {
        console.log("Error: ", err);
    } else {
        console.log("Server listening on PORT: ", PORT);
    }
});
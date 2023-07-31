// Create web server using Express
// Run using: node comments.js

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/comments.json', function(req, res) {
    res.sendFile(__dirname + '/public/comments.json');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});


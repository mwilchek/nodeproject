var express = require('express');
var app = express(); 

var port = process.env.PORT;

app.listen(port, function(error){
    console.log('Server is running on port: ' + port);
})

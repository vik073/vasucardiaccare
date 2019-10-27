// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/VasuCardiacCare'));
// Start the app by listening on the default
// Heroku port

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname, 'dist/VasuCardiacCare/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 1337);
 console.log('MyProject Server is Listening on port 8080');
// var express = require('express');
// var app = express();
// app.use(express.static('VasuCardiacCare')); // myApp will be the same folder name.
// app.get('/', function (req, res,next) {
//  res.redirect('/'); 
// });
// app.listen(8080, 'localhost');
// console.log('MyProject Server is Listening on port 8080');
var express = require("express");

var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });

app.listen(PORT, function(){
    console.log("Friend Finder is running on: http://localhost:" + PORT)
});

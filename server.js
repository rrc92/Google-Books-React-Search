var express = require("express");
// var mongojs = require("mongojs");

var bodyParser = require('body-parser');
var axios = require("axios")
var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static("public"));


// set the app up with bodyparser
app.use(bodyParser());
// Database configuration
var databaseUrl = process.env.MONGODB_URI || "books_db";
var collections = ["books"];
// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);
// Log any mongojs errors to console
db.on("error", function(error) {
 console.log("Database Error:", error);
});

axios.get(`https://www.googleapis.com/books/v1/volumes?q=javascript`)
   .then(function(data)
   {
     console.log(data)
   })
   
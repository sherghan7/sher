const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


let app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect("mongodb://localhost:27017/myResumeBlogDB", { useNewUrlParser: true, useUnifiedTopology: true});


app.get("/", function(req, res){
  res.render("home");
});

app.get("/contact", function(req, res){
  res.render("contact-me");
});

app.get("/experience", function(req, res){
  res.render("experience");
});

app.get("/education", function(req, res){
  res.render("education");
});

app.get("/projects", function(req, res){
  res.render("projects");
});

app.get("/blog", function(req, res){
  res.render("blog");
});






app.listen(3000, function(){
  console.log("Server is up running on port 3000");
})

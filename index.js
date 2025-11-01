//make app, port, listen
const express = require("express"); //to make app
const app = express(); //app is express function
const port = 8900; //endpoint
app.listen(port, () => {
    //listening requests
    console.log(`App is listening on port ${port}`);
});

//set everything to access all folders and there files
const path = require("path"); //to join folders

//route pages folder
app.set("views", path.join(__dirname, "ejsFiles/views"));

//From any dir access Static files=files which are in html code

app.use(express.static(path.join(__dirname, "ejsFiles/public/CSS"))); //to access static css files in ejs files
app.use(express.static(path.join(__dirname, "ejsFiles/public/JS"))); //to access static js files in ejs files
app.use(express.static(path.join(__dirname, "ejsFiles/public/Logo"))); //to access static logo files in ejs files

app.set("view engine", "ejs"); //to render ejs files

//Routes as response
app.get("/", (req, res) => {
    res.render("Login.ejs");
});
app.get("/signup", (req, res) => {
    res.render("Signup.ejs");
});
app.get("/HomePage", (req, res) => {
    res.render("HomePage.ejs");
});
app.get("/SearchedPage.ejs", (req, res) => {
    res.render("SearchedPage.ejs");
});
app.get("/PasswordAssistance", (req, res) => {
    res.render("PasswordAssistance.ejs");
});
app.get("/VerificationPage", (req, res) => {
    res.render("VerificationPage.ejs");
});
app.get(/.*/, (req, res) => {
    res.render("NoPage.ejs");
});

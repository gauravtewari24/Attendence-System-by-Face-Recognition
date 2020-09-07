var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
var bodyparser = require("body-parser")
const path = require('path')
const authRoutes = require("./routes/new_auth");
const {recognizer}=require('./requests/recognizer');

const PORT = process.env.PORT || 8000
// Database Connection
global.db = mysql.createConnection({

    host: "34.93.113.120",
    user: "root",
    password: "root",
    database: "bhurakdatabase",
    multipleStatements: true
})

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected");
    }
})

//Middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));

// My routes
app.use("/api", authRoutes)
app.get('/result', (req, res) => {
    var value = req.query.valid;
    console.log()
    res.render('result.ejs',{value: value})
})
app.get('/result/url', (req, res) => {
    /* var value = req.query.valid;
    console.log()
    res.render('result.ejs',{value: value}) */
    recognizer(req,res);
})
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(PORT, () => {
    console.log("app is running at " + PORT)
});
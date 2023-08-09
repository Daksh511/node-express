const express = require('express')
const app = express()
const port = 8000

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log("Middleware called URL is " + req.url);
    next();
});

app.get('/contact/:id', (req, res) => {
    var id = req.params.id;
    res.send("Contact :" + id);
})

app.get('/search/',(req,res) => {
    var id = req.query.name;
    res.send("Search is " + id);
})

app.get('/home/',(req,res) => {
    res.sendFile(__dirname+"/home.html");
})
app.get('/about/',(req,res) => {
    res.sendFile(__dirname+"/about.html");
})


app.get('/contact/',(req,res) => {
    res.sendFile(__dirname+"/form.html");
})
app.get('/process',(req,res) => {
    var mrk1 = parseInt(req.query.mrk1);
    var mrk2 = parseInt(req.query.mrk2);
    var mrk3 = parseInt(req.query.mrk3);
    var mrk4 = parseInt(req.query.mrk4);
    var sum = mrk1+mrk2+mrk3+mrk4;
    var avg = sum/4;
    var per = (sum/400)*100;
    // res.send("hello");
    res.send(`Total Marks : ${sum}
            Average Marks : ${avg} 
            Percentage : ${per}
            `);
    
    
})
app.listen(port)
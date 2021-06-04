
const express = require ('express');
const app = express();
const bodyParser = require("body-parser");
const path = require("path")
var PORT = 3000;
const bodyParserMW = bodyParser.urlencoded({extended: true})

app.get('/',(req,res,next)=> {
    res.sendFile(path.join(__dirname, "index2.html"));
   
});

app.post('/page', bodyParserMW, (req,res,next)=>{
    console.log(req.body)
});

app.listen(PORT,function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
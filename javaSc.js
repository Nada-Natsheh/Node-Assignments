
const express = require ('express');
const app = express();
const path = require("path")
var PORT = 3000;
const bodyParser = express.urlencoded({extended: true});
app.use(bodyParser);

app.use(express.static(path.join(__dirname + '/')));
app.get('/style.css', function(req, res, next){
    res.sendFile(__dirname + "/" + "style.css");
});

app.get('/',(req,res,next)=> {
    res.sendFile(path.join(__dirname, "index1.html"));
     
});
app.get('/',(req,res,next)=> {
    res.sendFile(path.join(__dirname, "index2.html"));
     
});

app.post('/info', bodyParser, (req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname, "page.txt"));
    res.end();
});

app.listen(PORT,function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
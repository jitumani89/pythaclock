var express = require("express");
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('pythaclock.html', { root: __dirname });
});
app.listen(process.env.PORT,function(){
    console.log("Hello World ! Server started"+process.env.PORT);
});
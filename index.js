const express = require("express");

const bodyParser =require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/bmicalculator",function(req,res){
res.sendFile(__dirname + "/index.html");
 
}
);
app.post("/bmicalculator",function(req,res){
    var ht = parseFloat(req.body.ht);
    var wt = parseFloat(req.body.wt);
    var result = (wt) / (ht * ht)
   
    res.send("Your BMI = "+ result);
})

app.listen(3000,function(){
    console.log("server renning on Port 3000");
});
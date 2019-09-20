var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');
var engines = require('consolidate');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mechanichero'
});

var server = app.listen(8080,function(){
    var host = server.address().address
    var post = server.address().port
    console.log("start");
})

con.connect(function(error){
    if(error) console.log(error);
    else console.log("Connected");
})

app.get('/getUser/:user_id',function(req,res){
    var sql = 'select * from users where user_id = ?';
    con.query(sql,[req.params.user_id],function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    })
});

app.get('/getMotorist/:email',function(req,res){
    var sql = 'select * from motorist where email = ? ';
    con.query(sql,[req.params.email],function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get('/getVehicle/:motoristid',function(req,res){
    var sql = 'select * from vehicle where motoristid = ?';
    con.query(sql,[req.params.motoristid],function(error,rows,fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    })
});
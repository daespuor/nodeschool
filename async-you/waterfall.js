var http= require('http');
var async= require('async');
var fs= require('fs');

async.waterfall([
    function(cb){
        fs.readFile(process.argv[2],function(err,res){
            if(err) return cb(err);
            cb(null,res);
        })
    },
    function(data,cb){
        var bodyRes='';
        http.get(data.toString().trimRight(),function(res){
            res.on('data',function(chunk){
                bodyRes+=chunk.toString();
            });
            res.on('end',function(){
                //console.log(bodyRes)
                cb(null,bodyRes);
            });
        }).on('error',function(err){
            cb(err);
        })
    }],
    function cb(err,result){
        if(err) return console.error(err);
        console.log(result);
    }
)

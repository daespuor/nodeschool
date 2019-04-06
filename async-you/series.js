var http=require('http');
var async= require('async');

async.series({
    requestOne:function(cb){
        var body='';
        http.get(process.argv[2],function(res){
            res.on('data',function(chunk){
                body+=chunk.toString();
            })
            res.on('end',function(chunk){
                cb(null,body);
            })
        }).on('error',function(err){
            cb(err);
        })
    },
    requestTwo:function(cb){
        var body='';
        http.get(process.argv[3],function(res){
            res.on('data',function(chunk){
                body+=chunk.toString();
            })
            res.on('end',function(chunk){
                cb(null,body);
            })
        }).on('error',function(err){
            cb(err);
        })
    }
},function cb(err,result){
    if(err) return console.error(err);
    console.log(result);
})
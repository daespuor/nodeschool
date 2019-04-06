var http=require('http');
var async= require('async');


async.map([process.argv[2],process.argv[3]],function(item,cb){
        http.get(item,function(res){
            var body='';
            res.on('data',function(chunk){
                body+=chunk.toString();
            })
            res.on('end',function(){
                cb(null,body);
            })
        }).on('error',function(err){
            cb(err);
        })
},function(err,result){
    if(err)
    return console.error(err);
    console.log(result);
})
var http=require('http');
var async= require('async');


async.each([process.argv[2],process.argv[3]],function(item,cb){
        http.get(item,function(res){
            res.on('data',function(chunk){})
            res.on('end',function(){
                cb();
            })
        }).on('error',function(err){
            cb(err);
        })
},function(err){
    if(err)
    console.error(err);
})
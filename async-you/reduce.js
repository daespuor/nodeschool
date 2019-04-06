var http=require('http');
var async= require('async');

async.reduce(['one','two','three'],0,
function(memo,item,callback){
    http.get(process.argv[2]+'?number='+item,function(res){
        var body='';
        res.on('data',function(chunk){
            body+=chunk.toString();
        })
        res.on('end',function(){
            callback(null,memo+Number(body));
        })
    }).on('error',function(err){
        callback(err);
    })
},
function(err,results){
    if(err) return console.error(err);
    console.log(results);
})
var http= require('http');
var async= require('async');
var text='';
var count=0;
async.whilst(
    function(){return text.trim()!=='meerkat'},
    function(cb){
        count++;
        http.get(process.argv[2],function(res){
            var body='';
            res.on('data',function(chunk){
                body+=chunk.toString();
            })
            res.on('end',function(){
                text=body;
                cb(null,text);
            })
        }).on('error',function(error){
            cb(error);
        })
    },
    function(err,result){
        if(err) return console.error(err);
        console.log(count);
    }
)
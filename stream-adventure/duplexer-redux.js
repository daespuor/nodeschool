var duplexer2= require('duplexer2');
var through2= require('through2');
var {Writable} = require('stream');
var writable= new Writable({objectMode: true});


module.exports=function(counter){
    var response={};
    writable._write=function(chunk,encoding,done){
        //{"short":"OH","name":"Ohio","country":"US"}
        if(chunk.country in response){
            response[chunk.country]++;
        }else{
            response[chunk.country]=1;
        }
        done();
    }
    writable.on('finish',function(){
        counter.setCounts(response);
    })

    var duplexer=duplexer2({objectMode: true},writable,counter);

    return duplexer;
}
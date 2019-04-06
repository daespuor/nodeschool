var through2= require('through2');
var split= require('split');
var zlib= require('zlib');
var combiner= require('stream-combiner');
module.exports=function(){
    var current;
    return combiner(
        split(),
        through2(function(chunk,enc,next){
            if(chunk.length==0){
                return next()
            }
            var obj=JSON.parse(chunk);
            if(obj.type=='genre'){
                if(current){
                    this.push(JSON.stringify(current)+'\n');
                }
                current={name:obj.name,books:[]}
            }else if(obj.type=='book'){
                current.books.push(obj.name);
            }
            next();
        },function(next){
            if(current){
                this.push(JSON.stringify(current)+'\n');
            }
            next();
        }),
        zlib.createGzip()
    );
}
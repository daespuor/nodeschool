var {Transform} = require('stream');
var split= require('split');
var str= new Transform();
var counter=1;
str._transform=function (data,env,cb){

    if(counter%2){
        this.push('\n'+data.toString().toLowerCase());
    }else{
        this.push('\n'+data.toString().toUpperCase());
    }
    counter++;
    cb();
}
process.stdin.pipe(split()).pipe(str).pipe(process.stdout);
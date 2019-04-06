var {Transform} = require('stream');
var str= new Transform();
str._transform=function (data,env,cb){
    this.push(data.toString().toUpperCase());
    cb();
}
process.stdin.pipe(str).pipe(process.stdout);
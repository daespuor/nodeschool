var {Transform} = require('stream');
var http= require('http');
var str= new Transform();
str._transform=function (data,env,cb){
    this.push(data.toString().toUpperCase());
    cb();
}
var server= http.createServer((req,res)=>{
    if(req.method==='POST'){
        req.pipe(str).pipe(res);
    }else{
        res.end();
    }
})
server.listen(process.argv[2]||3000);
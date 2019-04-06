var {spawn}= require('child_process');
var duplexer2 = require('duplexer2');

module.exports=function(cmd,args){
    var child= spawn(cmd,args);

    return  duplexer2(child.stdin,child.stdout);
}
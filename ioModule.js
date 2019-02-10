var fs= require('fs');

module.exports=function(dir,ext,callback){
    fs.readdir(dir,function(err,list){
        if(err){
            return callback(err,null);
        }
        var results=[];
        for(let item of list){
            if(item.split('.')[1]===ext){
                results.push(item);
            }
        }
        callback(null,results);
    })
}
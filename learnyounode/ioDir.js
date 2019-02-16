var fs= require('fs');

fs.readdir(process.argv[2],function(err,list){
  
    for(let item of list){
        if(item.split('.')[1]===process.argv[3]){
            console.log(item);
        }
    }
    
})
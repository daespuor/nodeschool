var moduleIO= require('./ioModule');

moduleIO(process.argv[2],process.argv[3],function(err,data){
    if(err){
        console.log(err);
    }
    if(data){
        for(let item of data){
            console.log(item);
        }
    }
})
var http= require('http');


function httpGet(httpUrls,position){
    http.get(httpUrls[position],function(response){
        var result='';
        response.setEncoding('utf-8');
        response.on('data',(data)=>{
            result=String(result)+String(data);
        });
        response.on('end',()=>{
            console.log(result);
            position++;
            if(httpUrls.length>position){
                httpGet(httpUrls,position);
            }
        })
    })
    
}

httpGet(process.argv,2);
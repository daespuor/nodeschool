var http= require('http');
var url= require('url');

var server= http.createServer(function(req,res){
    var parseUrl=url.parse(req.url,true);
    res.writeHead(200,{'Content-Type':'application/json'});
    if(parseUrl.pathname==='/api/parsetime'){
        var isoDate=new Date(parseUrl.query.iso);
        var response={
            "hour":isoDate.getHours(),
            "minute":isoDate.getMinutes(),
            "second":isoDate.getSeconds()
        }
        res.write(JSON.stringify(response));
        res.end();
    }
    else if(parseUrl.pathname==='/api/unixtime'){
        var unixTime= new Date(parseUrl.query.iso).getTime();
        var response={"unixtime":unixTime};
        res.write(JSON.stringify(response));
        res.end();
    }
    else{
        res.writeHead(400);
        res.end();
    }
});

server.listen(process.argv[2]);
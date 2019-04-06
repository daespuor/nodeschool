var http = require('http');
var async = require('async');

async.series({
    postRequest: function (callback) {
        async.times(5, function (item, cb) {
            var opt={
                method:'POST',
                host:process.argv[2],
                port:process.argv[3],
                path:'/users/create'
            }
            var req=http.request(opt,function(res){
                res.on('data',function(chunk){
                    console.log(chunk.toString())
                })
                res.on('end',function(){
                    cb();
                })
            });
            req.write(JSON.stringify({'user_id':item+1}));
            req.end();
        }, function (err, results) {
            if (err) return console.error(err);
            callback();
        })
    },
    getRequest:function(cb){
        http.get('http://'+process.argv[2]+':'+process.argv[3]+'/users',function(res){
            var body='';
            res.on('data',function(chunk){
                body+=chunk.toString();
            })
            res.on('end',function(){
                cb(null,body);
            })
        }).on('error',function(err){
            cb(err);
        })
    }
}, function (err, results) {
    if (err) return console.error(err);
    console.log(results.getRequest);
})
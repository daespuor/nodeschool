var concat= require('concat-stream');

process.stdin.pipe(concat(function(body){
    process.stdout.write(body.reverse().toString());
})
)
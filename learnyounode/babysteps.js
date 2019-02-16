var {argv}= process;
var result=0;
for(var i=2;i<argv.length;i++){
    result=result+Number(argv[i]);
}

console.log(result);
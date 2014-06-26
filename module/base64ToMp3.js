var  fs=require('fs');

var base64ToMp3=function(sourcePath, destiPath){
    fs.readFile(sourcePath, 'base64',function(err,data){
        if(err)throw  err;
        if((!destiPath) || destiPath=='')
            destiPath=sourcePath.substring(0,sourcePath.indexOf("_(1).b64"))+".mp3";
        var reader=fs.createReadStream(sourcePath);
        var writer=fs.createWriteStream(destiPath);

        reader.on('error', function(err) {
            throw  err;
        });
        reader.on('readable', function() {
            var chunk;
            while (null !== (chunk = reader.read())) {
                //console.log(chunk.toString("base64"));
                writer.write(new Buffer(chunk.toString(),"base64"));
            }
        });
        reader.on('end', function() {
            console.log('there will be no more data.');
        });
    });
}
module.exports=base64ToMp3;
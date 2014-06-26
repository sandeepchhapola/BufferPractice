var  fs=require('fs');

var mp3ToBase64=function(sourcePath, destiPath){
    fs.readFile(sourcePath, 'utf8',function(err,data){
    if(err)throw  err;
    if((!destiPath) || destiPath=='')
        destiPath=sourcePath.substring(0,sourcePath.indexOf(".mp3"))+"_(1).b64";
    var reader=fs.createReadStream(sourcePath);
    var writer=fs.createWriteStream(destiPath);

    reader.on('error', function(err) {
        throw  err;
    });
    reader.on('readable', function() {
        var chunk;
        while (null !== (chunk = reader.read())) {
            //console.log(chunk.toString("base64"));
            writer.write(chunk.toString("base64"));
        }
    });
    reader.on('end', function() {
        console.log('there will be no more data.');
    });
});
}

exports=module.exports =mp3ToBase64;
const playlist = require("../../data/titles.json");
const client = require("../services/s3-client");

exports.getTracks = function(req, res, next){
  res.json(playlist);
}

exports.streamTrack = function(req, res){
  // Object properties from S3
  var params = {
    Bucket: 'audio-player-bucket',
    Key: `music/${req.params.filename}`
  };
  
  // Create download stream from S3
  var downloadStream = client.downloadStream(params);

  downloadStream.on('error', function() {
    res.status(404).send('Not Found');
  });
  downloadStream.on('httpHeaders', function(statusCode, headers, resp) {
    // Set Headers
    res.set({
      'Content-Type': headers['content-type']
    });
  });

  // Pipe download stream to response
  downloadStream.pipe(res);
}
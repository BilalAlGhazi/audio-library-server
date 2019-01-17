const axios = require("axios");
var _ = require("lodash");
const playlist = require("../../data/titles.json");
const client = require("../services/s3-client");
const config = require("../../config");
const keys = require("../../keys");

exports.getTracks = function(req, res){
  res.json(playlist);
}

exports.getTrackDetails = async function(req, res){
  // Get the track ID
  const trackId = req.params.trackId;
  // Get the track index details
  const itemIndex = _.findIndex(playlist, function(o) { 
    return o.id == trackId; 
  });

  try{
    const result = await axios.get(`${config.metadataAPIURL}${playlist[itemIndex].metadata}&api_key=${keys.lastFmApiKey}`);
    res.json(
      {
        name: result.data.track.name,
        duration: result.data.track.duration,
        artistName: result.data.track.artist.name,
        albumName: result.data.track.album.title,
        image: result.data.track.album.image
      }
    );
  } catch (e) {
    res.status(500).send("An error occured");
  }
}

exports.streamTrack = function(req, res){
  // Object properties from S3
  var params = {
    Bucket: "audio-player-bucket",
    Key: `music/${req.params.filename}`
  };
  
  // Create download stream from S3
  var downloadStream = client.downloadStream(params);

  downloadStream.on("error", function() {
    res.status(404).send("Not Found");
  });
  downloadStream.on("httpHeaders", function(statusCode, headers, resp) {
    // Set Headers
    res.set({
      "Content-Type": headers["content-type"]
    });
  });

  // Pipe download stream to response
  downloadStream.pipe(res);
}
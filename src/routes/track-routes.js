const trackController = require("../controllers/track-controller");

module.exports = function(app) {
  // Get all tracks
  app.get("/api/tracks", (req, res, next) => trackController.getTracks(req, res, next));
  // Stream audio tracks
  app.get("/api/stream/:filename", (req, res) => trackController.streamTrack(req, res));
}
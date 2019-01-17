const trackController = require("../controllers/track-controller");

module.exports = function(app) {
  // Get all tracks
  app.get("/api/tracks", (req, res) => trackController.getTracks(req, res));
  // Get track details
  app.get("/api/track/:trackId", (req, res) => trackController.getTrackDetails(req, res));
  // Stream audio tracks
  app.get("/api/stream/:filename", (req, res) => trackController.streamTrack(req, res));
}
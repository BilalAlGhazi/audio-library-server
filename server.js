const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const trackRoutes = require("./src/routes/track-routes");

// Configure routes
trackRoutes(app);

// Start the server
app.listen(port);
console.log('Audio player server is listening on port ' + port);

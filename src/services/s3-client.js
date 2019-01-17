const s3 = require("s3");
const keys = require("../../keys");

const client = s3.createClient({  
  s3Options: {
    accessKeyId: keys.amazonAccessKey,
    secretAccessKey: keys.amazonSecretKey
  }
});

module.exports = client;
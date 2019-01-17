const s3 = require("s3");

const client = s3.createClient({  
  s3Options: {
    accessKeyId: "AKIAI3MOGDY7NUBSCG6A",
    secretAccessKey: "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"
  }
});

module.exports = client;
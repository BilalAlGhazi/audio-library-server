const s3 = require('s3');

const client = s3.createClient({  
  s3Options: {
    accessKeyId: 'AKIAJUJLVYUTFCYQ2UGA',
    secretAccessKey: '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'
  }
});

module.exports = client;
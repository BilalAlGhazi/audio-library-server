const s3 = require('s3');

const client = s3.createClient({  
  s3Options: {
    accessKeyId: '',
    secretAccessKey: ''
  }
});

module.exports = client;
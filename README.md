# Audio Player: Server
Back-end server for the audio player app.

## About the Project

This project is part of a sample audio player app, it serves as the back end for the app. List of audio tracks are stored in the `data/titles.json` file. Metadata of the tracks are retrieved from [last.fm](https://www.last.fm) and the actual audio files are stored on an S3 bucket.
The audio files on the bucket are dummy MP3 files retrieved from an open license audio library.

## Running the Project

Clone the repository then run npm install in order to install the dependencies, then the application can be started.

```shell
git clone https://github.com/BilalAlGhazi/audio-library-server.git
cd audio-library-server
npm install
npm run start
```

This will run the API server, the server will listen to port 3000 by default unless the PORT environment variable is defined.

## Future Enhancements

The server can be enhanced by adding search functionality to search for tracks, a fuzzy search library can be utilized for that purpose like [fuse.js](http://fusejs.io/).

Server can be modified to serve a Graph QL endpoint instead of REST, this will reduce the number of calls the client has to make in order to retrieve the details of the albums.
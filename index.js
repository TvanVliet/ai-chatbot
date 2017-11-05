// Fill in your API.AI/Dialogflow keys
const APIAI_TOKEN = 'XXXXXXXX';
const APIAI_SESSION_ID = 'XXXXXXXX';

// instantiating Express and the server
const express = require('express');
const app = express();

// initializing API.AI/Dialogflow
const apiai = require('apiai')(APIAI_TOKEN);

app.use(express.static(__dirname + '/views')); // used for html
app.use(express.static(__dirname + '/public')); // used for js, css and images

const server = app.listen(3000, () => {
	console.log('Listening on: ' + server.address().port);
});

//setting up socket.io
const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('Connection established.');
});

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

// log what is being said by socket.
io.on('connection', function(socket) {
  socket.on('chat message', (text) => {
    console.log('You just said: ' + text);

    // Get a reply from API.ai

    let apiaiReq = apiai.textRequest(text, {
      sessionId: APIAI_SESSION_ID
    });

    apiaiReq.on('response', (response) => {
      let aiText = response.result.fulfillment.speech;
      console.log('Bot reply: ' + aiText);
      socket.emit('bot reply', aiText);
    });

    apiaiReq.on('error', (error) => {
      console.log(error);
    });

    apiaiReq.end();

  });
});
# Chatbot Henk
This is a practice project to make an AI Chatbot using the Web Speech API, for which I used the guide at: https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js/ written by Tomomi Imura. 

## How to use
Install the node modules:

```
npm install
```

Get a developer account at https://dialogflow.com/ to get your API keys and replace the XXXXX's in index.js with your keys:
```
const APIAI_TOKEN = 'XXXXXXXXXXX';
const APIAI_SESSION_ID = 'XXXXXXXXX';
```

### Example:
![Chatbot Henk](https://github.com/TvanVliet/ai-chatbot/blob/master/example/chatbothenk.png?raw=true)

## Built with:
* Node.js
* [Express](https://expressjs.com/)
* [Dialogflow (API.AI)](https://dialogflow.com/)
* [Socket.IO](https://socket.io/)
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
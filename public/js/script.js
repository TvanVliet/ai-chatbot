// creating an instance of SpeechRecognition (Web Speech API)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// creating an instance of socket.IO
const socket = io();

// connect text messages to the html
const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

// starting the speech recognition
document.querySelector('button').addEventListener('click', () => {
	recognition.start();
});

// retrieve what is last said and send it using socket.IO
recognition.addEventListener('result', (e) => {
	let last = e.results.length - 1;
	let text = e.results[last][0].transcript;

	outputYou.textContent = text;
	console.log('Confidence: ' + e.results[0][0].confidence);

	socket.emit('chat message', text);
});

function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
};

// retrieve the reply of the bot
socket.on('bot reply', function(replyText) {
  synthVoice(replyText);

  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = replyText;
});

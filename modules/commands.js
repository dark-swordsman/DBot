import { client } from './client.js';

// Helper function to send the correct type of message:
function sendMessage (target, context, message) {
  if (context['message-type'] === 'whisper') {
    client.whisper(target, message)
  } else {
    client.say(target, message)
  }
}

function heartbeat (target, context, params) {
  const msg = 'Yeah, shutup.';

  sendMessage(target, context, msg);
}

function roooooosh (target, context) {
  const msgs = [
    '/me bans roooooosh forever',
    'roooooosh is the best person ever!',
    '/me gives roooooosh a plush stitch'
  ]

  const number = Math.floor(Math.random() * (2 + 1));

  const msg = msgs[number];

  sendMessage(target, context, msg);
}

module.exports = {
  heartbeat: heartbeat,
  roooooosh: roooooosh
}
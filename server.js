const tmi = require('tmi.js');
const oauth = require('./oauthToken.js');

let commandPrefix = '!';

let opts = {
  identity: {
    username: 'darkswordsmanbot',
    password: oauth.token
  },
  channels: [
    'darkswordsmantv'
  ]
};

let knownCommands = { heartbeat, roooooosh };

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

// Helper function to send the correct type of message:
function sendMessage (target, context, message) {
  if (context['message-type'] === 'whisper') {
    client.whisper(target, message)
  } else {
    client.say(target, message)
  }
}

let client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('disconnected', onDisconnectedHandler);

client.connect();

// Called every time a message comes in:
function onMessageHandler (target, context, msg, self) {
  if (self) { return } // Ignore messages from the bot

  // This isn't a command since it has no prefix:
  if (msg.substr(0, 1) !== commandPrefix) {

    // This console log is only for logging message. ONLY FOR DEBUGGING
    //console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
    return
  }

  // Split the message into individual words:
  const parse = msg.slice(1).split(' ');
  // The command name is the first (0th) one:
  const commandName = parse[0];
  // The rest (if any) are the parameters:
  const params = parse.splice(1);

  // If the command is known, let's execute it:
  if (commandName in knownCommands) {
    // Retrieve the function by its name:
    const command = knownCommands[commandName]
    // Then call the command with parameters:
    command(target, context, params);
    console.log(`* Executed ${commandName} command for ${context.username}`);
  } else {
    console.log(`* Unknown command ${commandName} from ${context.username}`);
  }
}

// Called every time the bot connects to Twitch chat:
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  client.say(opts.channels[0], '/me walks in and stares at everyone...');
}

// Called every time the bot disconnects from Twitch:
function onDisconnectedHandler (reason) {
  console.log(`Womp womp, disconnected: ${reason}`);
}


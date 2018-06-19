import { client } from '../modules/client';

// Called every time the bot connects to Twitch chat:
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  client.say(channel, '/me walks in and stares at everyone...');
  setTimeout(() => {
    client.say(channel, 'What the hell are you all looking at?!');
  }, 3000);
}
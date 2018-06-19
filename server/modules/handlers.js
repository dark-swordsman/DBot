import { client, channel } from './client.js';

// Called every time the bot disconnects from Twitch:
function onDisconnectedHandler (reason) {
  console.log(`Womp womp, disconnected: ${reason}`);
}


client.on('connected', onConnectedHandler);
client.on('disconnected', onDisconnectedHandler);
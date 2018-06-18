import { client, channel } from './modules/client.js';
import { onMessageHandler, onConnectedHandler, onDisconnectedHandler } from './modules/handlers.js';

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('disconnected', onDisconnectedHandler);

client.connect();

module.exports = {
  client
}
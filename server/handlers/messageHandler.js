import { bot } from '../lib';
import commands from '../commands';
import CommandHelpers from './helpers';


let commandPrefix = '!';

// Called every time a message comes in:
function messageHandler (target, context, msg, self) {
  const command = CommandHelpers.parseMessage(msg, commandPrefix, self);

  commands
    .findCommand(command.name)
    .then((command) => {
      command.trigger();
    });


}

client.on('message', messageHandler);
import commands from '../commands';

const parseMessage = (msg, prefix, self) => {
  if (self) { return; } // Ignore messages from the bot

  if (msg.substr(0, 1) !== commandPrefix) {
    // debug command - ignore any messages that aren't a command
    //console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`)
    return;
  }

  // Split the message into individual words:
  parse = msg.slice(1).split(' ');
  
  return {
    // The command name is the first (0th) one:
    name = parse[0],
    // The rest (if any) are the parameters:
    params = parse.splice(1)
  }
}

const loadCommands = () => {
  commands.load();
}

export default {
  loadCommands,
  parseMessage
}
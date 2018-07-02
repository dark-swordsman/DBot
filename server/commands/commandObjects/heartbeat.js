import Command from '../Command';
import bot from '../../lib/Bot';

module.exports = new Command({
  name: '!heartbeat',
  action: () => {
    bot.say("Yeah, yeah. Shut up.");
    console.log('poop');
  }
});
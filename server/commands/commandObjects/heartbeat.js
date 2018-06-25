import Command from '../Command';
import { tmiBot } from '../../lib';

export default new Command({
  name: '!heartbeat',
  action: () => {
    tmiBot.twitch.say(tmiBot.options.opts.channels[0], "Yeah, yeah. Shut up.");
  }
});
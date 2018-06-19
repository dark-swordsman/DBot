import Command from './Command.js';
import { bot } from './'
import randomMessage from '../handlers/commands/randomMessage';

const msgs = [
  '/me bans roooooosh forever',
  'roooooosh is the best person ever!',
  '/me gives roooooosh a plush stitch'
]

const msg = randomMessage(msgs);

bot.say(bot.channel, msg);

const roooooosh = {
  name: 'roooooosh'
}

export default new Command(roooooosh);
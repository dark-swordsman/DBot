import tmi from 'tmi.js'
import oauth from '../oauthToken.js';

let opts = {
  identity: {
    username: 'darkswordsmanbot',
    password: oauth.token
  },
  channels: [
    'darkswordsmantv'
  ]
};

let bot = new tmi.client(opts);

module.exports = {
  bot
}
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

let client = new tmi.client(opts);

module.exports = {
  client,
  channel: opts.channels[0]
}
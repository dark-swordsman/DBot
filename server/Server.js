import { client } from './modules/client';
import { CommandHelpers } from './helpers';

class Server {

  constructor() {
    // start the tmi client
    client.connect();
    // load the commands
    CommandHelpers.loadCommands();
  }

}

export default Server;
class Commands {
  constructor() {
    this.commands = {};
  }

  load() {
    console.log('Loading commands...');

    require('fs').readdirSync(__dirname).forEach((file) => {
      // Ignore index and Command
      if (file === 'index.js' || file === 'Command.js'){
        return;
      }

      console.log(`Loading command: ${file}`);
      const commandFile = require(`./${file}`);

      this.commands[commandFile.command] = commandFile;
    });
  }

  findCommand(name) {
    return new Promise((resolve, reject) => {
      // lookup by name
      let command = this.commands[name] || undefined;
  
      if (!command){
        reject();
      }

      resolve(command);
    });
  }
}

const commands = new Commands();

export default commands;
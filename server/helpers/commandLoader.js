function commandLoader(commandFolder) {

  let commands = [];

  console.log('Loading commands...');

  require('fs').readdirSync(commandFolder).forEach((file) => {
    console.log(`Loading command from: ${file}`);

    commands[file.command] = require(`./${file}`);
  });

  const temp = {};

  for (const commandIndex in commands) {
    const currentCommand = commands[commandIndex];
    temp[currentCommand.name] = currentCommand;
  }

  return temp;
}

export default commandLoader;
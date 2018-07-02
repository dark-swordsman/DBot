function commandLoader(commandFolder) {

  return new Promise((resolve, reject) => {
    
    let commands = [];
    
    console.log('Loading commands...');
    
    let totalFilesLoaded = 0;
    
    require('fs').readdirSync(`./server/${commandFolder}`).forEach((file) => {
      console.log(`Loading command from: ${file}`);
      
      commands[totalFilesLoaded] = require(`../${commandFolder}${file}`);
      
      totalFilesLoaded++;
    });
    
    const temp = {};
    
    for (const commandIndex in commands) {
      const currentCommand = commands[commandIndex];
      console.log(`Creating command: ${currentCommand.name}`);
      temp[currentCommand.name] = currentCommand;
    }
    
    if(totalFilesLoaded === 1){
      console.log(`Finished loading commands. \nThere was ${totalFilesLoaded} command loaded.`);
    } else {
      console.log(`Finished loading commands. \nThere were ${totalFilesLoaded} commands loaded.`);
    }
    
    console.log('--------');
    
    resolve(temp);

  });

}

export default commandLoader;
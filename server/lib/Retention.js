import request from 'request';
import fs from 'fs';

class Retention {
  constructor(){
    this.compose = (options) => {
      this.fileLocation = options.fileLocation;
    }
  }

  retentionBonus(options, fileLocation) {
    this.compose({
      'fileLocation': fileLocation
    });

    const date = new Date();
    const stringDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(`Applying retention bonus at: ${stringDate}`);

    // get list of chatters
    const channel = options.opts.channels[0];
    let response = {};

    request({
      url: `http://tmi.twitch.tv/group/user/${channel.substring(1)}/chatters`,
      headers: {
          "Client-ID": options.clientID
      }
    }, (err, res, body) => {
      response = JSON.parse(body);

    // get local list
    if(fs.existsSync(this.fileLocation)){



    } else {
      createNewFile({
        mods: response.chatters.moderators,
        viewers: response.chatters.viewers
      });

      return;
    }

    // compare to local list

    // add/remove multipliers (loop)

    // payout (loop)

    /* 
    *   other functions
    */

    });

    const createNewFile = (chat) => {
      
      const combineArrays = (array) => {
        let finishedArray = [];
        
        for(let i = 0; i < array.length; i++) {
          for(let j = 0; j < array[i].length; j++) {
            finishedArray.push(array[i][j]);
          }
        }
        
        return finishedArray;
      }
      

      fs.writeFile(this.fileLocation, `{}`, (err) => {
        if (err) {
          console.log(err);
        }

        console.log('generating new json file...');

        this.writeToFile(combineArrays([chat.mods, chat.viewers]));
      });
    }
  }

  writeToFile(array) {
    let file = {};

    fs.readFile(this.fileLocation, (err, data) => {
      file = JSON.parse(data);
      if (err) {
        console.log(err);
      }

      console.log('reading json file before injection...');

      let newArray = [];

      const exempt = ['darkswordsmantv', 'darkswordsmanbot', 'streamelements'];
      
      for(let i = 0; i < array.length; i++) {
        if(!(array[i] in exempt)) {
          newArray.push({
            'name': array[i],
            'mult': 0
          });
        }
      }

      file['array'] = newArray;
      
      fs.truncate(this.fileLocation, 0, () => {
        console.log('cleared original file...');

        const fileString = JSON.stringify(file);

        fs.writeFile(this.fileLocation, fileString, (err) => {
          if (err) {
            console.log(err);
          }

          console.log('successfully injected new users');
        });
      });
    });  
  }
}

export default new Retention();
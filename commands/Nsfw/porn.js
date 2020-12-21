/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

const Discord = require('discord.js');

module.exports = {
    name:"porn",
    description:"send meme in channel",

    async run (client,message, args){
     
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        
 
       
        // getting real images
        DabiClient.nsfw.real.random().then(json => {
            message.channel.send(json.url);
            // outputs data with image url, possible source and other stuff
        }).catch(error => {
            console.log(error);
            // outputs error
        });

           
    }
}


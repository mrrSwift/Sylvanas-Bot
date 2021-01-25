/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');


 module.exports = {
     name:"avatarneko",
     description:"i see",

     async run (client,message, args){


        message.channel.startTyping();
        neko.sfw.avatar().then(neko => {
            message.channel.send(`${neko.url}`)
        });
        message.channel.stopTyping();
          
        
        console.log('Avatarneko [1]')
     }
 }
 
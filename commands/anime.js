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
     name:"anime",
     description:"i see",

     async run (client,message, args){
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

        neko.sfw.wallpaper().then(neko => {

            const embed = new Discord.MessageEmbed()
            .setTitle('**Anime**')
            .setColor('#cd0000')
            .setImage(`${neko.url}`)
      
            message.channel.startTyping();
            message.channel.send(embed)
            message.channel.stopTyping();
            console.log('Anime [1]')
        });
       
          
        
           
     }
 }
 
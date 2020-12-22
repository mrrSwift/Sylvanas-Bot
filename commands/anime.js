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
            message.channel.send(`${neko.url}`)
            console.log('Anime [1]')
        });
       
          
        
           
     }
 }
 
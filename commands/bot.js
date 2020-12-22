/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
 module.exports = {
     name:"bot",
     description:"i see",

     async run (client,message, args){
        var javab = ["","What","Do you have anything to do?","do you have a problem ?","-_-","Wait, I'm doing something."];
        var jv = Math.floor(Math.random() * 5) + 1;
/*   Made by Mr Swift  */
        const say = new Discord.MessageEmbed()
            .setDescription(`${javab[jv]}`);

            message.channel.send(say);
            console.log('bot [1]')
     }
 }
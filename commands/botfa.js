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
     name:"ربات",
     description:"i see me",

     async run (client,message, args){
        var javabfa = ["","بله","جانم","چته","جونم زندگی","بنال","اینجام","عجب","کاری داری ؟","چیه؟"]
        var jv = Math.floor(Math.random() * 9) + 1;
/*   Made by Mr Swift  */
        const say = new Discord.MessageEmbed()
            .setDescription(`${javabfa[jv]}`);
            message.channel.startTyping();
            message.channel.send(say);
            message.channel.stopTyping();
            console.log('Bot fa [1]')
     }
 }
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
 module.exports = {
     name:"timeutc",
     description:"say time utc",

     async run (client,message, args){
        var all = new Date();
        var h = all.getUTCHours();
        var m = all.getUTCMinutes();
        var s = all.getUTCSeconds();
        const time = new Discord.MessageEmbed()
        .setTitle("𝐓𝐢𝐦𝐞 𝐔𝐓𝐂")
        .setColor('#18f285')
        .setDescription (`**${h}:${m}:${s}**`) 

        message.reply(time);

        
       
     }
 }
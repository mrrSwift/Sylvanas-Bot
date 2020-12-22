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
    name:"gay",
    description:"i see",

    async run (client,message, args){
       /*   Made by Mr Swift  */
       const love = Math.random() * 100;
       
       
/*   Made by Mr Swift  */
       const embed = new Discord.MessageEmbed()
           .setColor("#f8fc03")
           .setFooter(` ${message.guild.me.displayName}` )
           .addField(`☁${message.member.displayName}🌈 ${Math.floor(love)}% Gay`,'\u200B ');
           

       message.channel.send(embed);
       console.log(`Gay [1]`)
    }
}


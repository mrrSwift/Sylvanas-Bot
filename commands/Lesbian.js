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
    name:"lesbian",
    description:"i see",

    async run (client,message, args){
       
       const love = Math.random() * 100;
    
       
/*   Made by Mr Swift  */
       const embed = new Discord.MessageEmbed()
           .setColor("#03fcdb")
           .setFooter(` ${message.guild.me.displayName}` )
           .addField(`☁${message.member.displayName}is 🌈 ${Math.floor(love)}%  lesbian`,'\u200B ');
           
           console.log(`lesbian [1]`)
           message.channel.startTyping();
       message.channel.send(embed);
       message.channel.stopTyping();
      
    }
}


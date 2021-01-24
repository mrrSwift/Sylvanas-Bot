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
     name:"avatar",
     description:"i see",

     async run (client,message, args){
       
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!member)return message.channel.send("Mention Member")

        const avatarURL = new Discord.MessageEmbed()
        .setTitle('Avatar Member')
        .setImage(member.user.displayAvatarURL())
        .setTimestamp()

        message.channel.startTyping();
        message.reply(avatarURL);
        message.channel.stopTyping();

        console.log('Avatar [1]')
     }
 }
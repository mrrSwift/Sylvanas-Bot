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
    name:"info",
    description:"i see",

    async run (client,message, args){

        const info = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('Bot Developer :','!                     𝑺𝒘𝒊𝒇𝒕#2975 ')
        .addField('Time Create Bot :','2020/7/11 ')
        .addField('Version Bot :','3.2')
        .addField('Language','ENG ,FA(Farsi)')
        .setColor('#cd46f2')
        .setTimestamp()
        message.channel.startTyping();
        message.channel.send(info)
        message.channel.stopTyping();
    }
}

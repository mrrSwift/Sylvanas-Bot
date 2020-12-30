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
const db = require('quick.db')
 module.exports = {
     name:"setwelcomech",
     description:"i see",

     async run (client,message, args){

        

        let channel = message.mentions.channels.first()

        if(!channel) return message.channel.send('Please mention the channel :D')

        if (message.member.hasPermission('MANAGE_MESSAGES')) {

        db.set(`welchannel_${message.guild.id}`,channel.id)
     

        message.channel.send('Channel **WELCOME** Seted  :D')

        }

     }
 }
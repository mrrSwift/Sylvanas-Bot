/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js')
const db = require('quick.db')

 module.exports = {
     name:"delwelcomech",
     description:"i see",

     async run (client,message, args){
/*   Made by Mr Swift  */
        let channel = message.mentions.channels.first()

        if(!channel) return message.channel.send('Mention Welcome Channel:D')

        if (message.member.hasPermission('MANAGE_MESSAGES')) {
/*   Made by Mr Swift  */
        db.delete(`welchannel_${message.guild.id}`)
     

        message.channel.send('Channel **WELCOME** Deleted :D')
        
        
        }
     }
 }
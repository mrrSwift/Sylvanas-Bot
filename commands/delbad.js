/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js')
const db = require('quick.db')

 module.exports = {
     name:"delbad",
     description:"i see",

     async run (client,message, args){
/*   Made by Mr Swift  */
      

        if (message.member.hasPermission('MANAGE_MESSAGES')) {
/*   Made by Mr Swift  */
        db.delete(`badchannel_${message.guild.id}`)
     

        message.channel.send('bad word off :(')
        
        
        }
     }
 }
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
     name:"setbad",
     description:"i see",

     async run (client,message, args){

        

       

        

        if (message.member.hasPermission('MANAGE_MESSAGES')) {

        db.set(`badchannel_${message.guild.id}`,message.guild.id)
     

        message.channel.send('bad words on :D')

        }

     }
 }
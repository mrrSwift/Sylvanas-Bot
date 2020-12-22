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
const fs = require('fs')
const config = require("../config.json")
 module.exports = {
     name:"dm",
     description:"i see",

     async run (client,message, args){
       
        const idowner = `${config.botstat.ownerID}`
         
        if(message.author.id === idowner){
         message.delete();
        /*   Made by Mr Swift  */
        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        const msg = args.slice(0).join(" ");

        member.send(`-------------------- \n ${msg}   \n --------------------\n 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐟𝐫𝐨𝐦 : ${message.author.username}`)
        }

     }
 }
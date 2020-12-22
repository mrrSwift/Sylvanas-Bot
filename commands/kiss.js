/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');
const config = require("../config.json")

 module.exports = {
     name:"kiss",
     description:"i see",

     async run (client,message, args){
         const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

         const say = new Discord.MessageEmbed()
            .setDescription(`ki ro mikhay bos koni ?? \n Who do you want to kiss??`)
            .setColor('#cd46f2')

         if (!user) return message.reply(say)

         
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
         if (user.id === `${config.botstat.botID}`) {
            message.react("💋")
             message.channel.send ('^-^')}else{ neko.sfw.kiss().then(neko => {
                const kiss = new Discord.MessageEmbed()
                .setDescription(`${user} You got a kiss from${message.author.username}`)
                .setImage(`${neko.url}`)
                .setColor('#cd46f2')

                message.channel.send(kiss)
                console.log(`Kiss [1]`)
            })};


       
       
          
        
           
     }
 }
 
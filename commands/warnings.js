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
     name:"warnings",
     description:"Check a user warnings",

     async run (client,message, args){

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
/*   Made by Mr Swift  */
        let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

        let warningss = db.get(`warnings_${message.guild.id}_${user.id}`)
        
        if (warnings === null) warningss = 0 ;
  
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
        const warning = new Discord.MessageEmbed()
        .setTitle(`**𝐖𝐚𝐫𝐧𝐢𝐧𝐠𝐬 𝐨𝐟 ${user.username}**`)
        .setColor('#ffae00')
        .setDescription(`𝟑 𝐰𝐚𝐫𝐧 = 𝐤𝐢𝐜𝐤 , 𝟔 𝐰𝐚𝐫𝐧 = 𝐛𝐚𝐧`)
        .addField('Warn', `*${warningss}* warning(s)`)

        message.channel.send(warning);

        

       
     }
 }
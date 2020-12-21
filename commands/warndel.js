/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
const db = require('quick.db')
const warnings = require('./warnings');
 module.exports = {
     name:"delwarn",
     description:"Warn a member",

     async run (client,message, args){
         if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that \n You don\'t have the right permissions.');

         const user =message.mentions.users.first() || message.guild.members.cache.get(args[0]);


         if(!user) return message.channel.send('Pls specify a user , via mention or ID');
/*   Made by Mr Swift  */
         if(user.bot) return message.channel.send('You can\'t warn bots');

         if(user.id === message.author.id) return message.channel.send('You can\'t clear your own warnings');

      
         if(warnings === null) return message.channel.send(`**${user.username}** has no warnings`);
         /*   Made by Mr Swift  */
         const usersmd=message.author.username; 

        

         db.delete(`warnings_${message.guild.id}_${user.id}`);

         const wwarrn = new Discord.MessageEmbed()
            .setTitle('** 𝐃𝐞𝐥𝐞𝐭𝐞 𝐀𝐥𝐥 𝐖𝐚𝐫𝐧𝐞𝐝 𝐌𝐞𝐦𝐛𝐞𝐫 **')
            .setColor('#4fff7e')
            .setDescription(`ID :${user.username}} `)
            .setTimestamp()
            .setFooter(`Warn By ${usersmd}  ${message.guild.me.displayName}`);
/*   Made by Mr Swift  */
         message.channel.send(wwarrn)
       
     }
 }
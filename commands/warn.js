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
     name:"warn",
     description:"Warn a member",

     async run (client,message, args){
         
         if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that \n You don\'t have the right permissions.')

         const usersmd=message.author.username; 

         const user =message.mentions.users.first() || message.guild.members.cache.get(args[0]);


         if(!user) return message.channel.send('Pls specify a user , via mention or ID');

         if(user.bot) return message.channel.send('You can\'t warn bots');

         if(user.id === message.author.id ) return message.channel.send('You can\'t warn yourself');

         if(message.guild.owner.id === user.id) return message.channel.send('You can\'t warn the sever\'s owner');

         let reason = args.slice(1).join(" ");

         if(!reason) reason ='Unspecified';

         let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

         var none01 = "3 𝐖𝐚𝐫𝐧";

         var none02 = "6 𝐖𝐚𝐫𝐧";
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
         if(warnings === null) { 

            db.set(`warnings_${message.guild.id}_${user.id}`, 1);

            
             const wwarrn = new Discord.MessageEmbed()
            .setTitle('** 𝐖𝐚𝐫𝐧𝐞𝐝 𝐌𝐞𝐦𝐛𝐞𝐫 **')
            .setColor('#ff0000')
            .setDescription(`ID :${user.username} \n Reason :${reason} \n  Warn 1/3 `)
            .setTimestamp()
            .setFooter(`Warn By ${usersmd}  ${message.guild.me.displayName}`);


            user.send(`You were warned in ${message.guild.name} for the Follwoing reason :\'${reason}\'`);

            await message.channel.send(wwarrn);
         }
         let warningss = db.get(`warnings_${message.guild.id}_${user.id}`);
         
         if(warnings !== null) {
             
            db.add(`warnings_${message.guild.id}_${user.id}`, 1);
            

            const wwarrn = new Discord.MessageEmbed()
            .setTitle('** 𝐖𝐚𝐫𝐧𝐞𝐝 𝐌𝐞𝐦𝐛𝐞𝐫 **')
            .setColor('#ff0000')
            .setDescription(`ID :${user.username} \n Reason :${reason} \n  Warn ${warningss + 1}/3 `)
            .setTimestamp()
            .setFooter(`Warn By ${usersmd}`);


            user.send(`You were warned in ${message.guild.name} for the Follwoing reason :\'${reason}\'`);

            await message.channel.send(wwarrn);
        }
        
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
        if(warningss === 3) {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

             member.kick(none01)
             message.channel.send(` kick ${user} Because it has already received three warnings `)
             console.log(`\n\n----------------------- \n\n User kick For 3 Warn \n\n Username:${user}\n\n-----------------------  `)
             user.send(`You Kicked ${message.guild.name} for the Follwoing reason :\'${reason}\'`);
            };
             if(warningss === 6) {
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
                 member.ban(none02)
                 message.channel.send(` Ban ${user} Because it has already received Six warnings `)
                 console.log(`\n\n----------------------- \n\n User Ban For 6 Warn \n\n Username:${user}\n\n-----------------------  `)
                 user.send(`You Baned ${message.guild.name} for the Follwoing reason :\'${reason}\'`);
                };
     }
 }
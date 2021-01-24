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
const { on } = require('superagent');
 module.exports = {
     name:"mod",
     description:"i see",

     async run (client,message, args){

        if (!message.member.hasPermission('KICK_MEMBERS','BAN_MEMBERS','MANAGE_MESSAGES')) return message.channel.send('You can\'t Use that!')
        if (!message.guild.me.hasPermission('KICK_MEMBERS','BAN_MEMBERS','MANAGE_MESSAGES')) return message.channel.send('I don\'t have the right permissions.') 
        message.delete();
       
        const onoff = args[0];

        const time = args[1];

        if(!onoff) return message.channel.send('Pls write off or on');
        if(!time) return message.channel.send('pls write Time');

        const usersmd =message.author.username; 

        

        if(onoff === 'on') {
            const msgon = new Discord.MessageEmbed()
        .setTitle(`**Alive In Chat** :white_check_mark:`)
        .setDescription(`\n **CMD By **  :  ${usersmd} \n \n **Time** : ${time}` )
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#15fc00')
        .setTimestamp()
        message.channel.startTyping();
             message.channel.send(msgon)
             message.channel.stopTyping();
             console.log(`\n\n----------------------- \n\n Mod on [1] \n\n name : ${usersmd} \n\n Time : ${time}\n\n -----------------------`)
        };
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
        if(onoff === 'off') {
            const msgoff = new Discord.MessageEmbed()
            .setTitle(`**Die In Chat** :x:`)
            .setDescription(`**CMD By**  :  ${usersmd} \n \n **Time** : ${time}` )
            .setThumbnail(message.author.displayAvatarURL())
            .setColor('#fc0000')
            .setTimestamp()
            message.channel.startTyping();
                 message.channel.send(msgoff)
                 message.channel.stopTyping();
                 console.log(`\n\n----------------------- \n\n Mod off [1] \n\n name : ${usersmd} \n\n Time : ${time}\n\n -----------------------`)
    
        }

     }
 }
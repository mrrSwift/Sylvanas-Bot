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
 module.exports = {
     name:"love",
     description:"i see",

     async run (client,message, args){
        let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!person) return message.channel.send('Mention Friend xD')

        if ( message.author.id === person.id) return message.reply("```Do you not know how much you love yourself???? ```")
        if ( person === 'undefined') return message.reply("```Nothing to be found  ```")
        const usersmd=message.author.username; 
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
/*   Made by Mr Swift  */
        const embed = new Discord.MessageEmbed()
            .setColor("#fc0303")
            .setFooter(`Cmd By ${usersmd}   ${message.guild.me.displayName}` )
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}**  :`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
            
            message.channel.startTyping();
        message.channel.send(embed);
        message.channel.stopTyping();
        console.log(`Love [1]`)
       
     }
 }


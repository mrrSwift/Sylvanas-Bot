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
    name:"haval",
    description:"i see",

    async run (client,message, args){
       let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

       if (!person) return message.channel.send('Tarafo TAG Kun xD')
/*   Made by Mr Swift  */
       if ( message.author.id === person.id) return message.reply("```Ehsas mikonm chizi ngm behter faght migam Your legend :|  ```")
       if ( person === 'undefined') return message.reply("```Chizi peyda nkrdm  ```")
       const usersmd=message.author.username; 
       const love = Math.random() * 100;
       
      
/*   Made by Mr Swift  */
       const embed = new Discord.MessageEmbed()
           .setColor("#9332a8")
           .setFooter(`Cmd By ${usersmd}   ${message.guild.me.displayName}` )
           .addField(`☁ **${person.displayName}** be andaze  :`,
           `☣ ${Math.floor(love)}% haval ast`);
           

       message.channel.send(embed);
       console.log(`Haval [1]`)
    }
}


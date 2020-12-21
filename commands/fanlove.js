/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
module.exports = {
    name:"loveubaby2020",
    description:"i see",

    async run (client,message, args){
        message.delete();
       let person = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
/*   Made by Mr Swift  */
       if ( message.author.id === person.id) return message.reply("```Vaghean nmidoni khudeto cheghadr dos dari  ??? ```")
       const usersmd=message.author.username; 
       
/*   Made by Mr Swift  */
       const embed = new Discord.MessageEmbed()
           .setColor("#ffb6c1")
           .setFooter(`Cmd By ${usersmd}   ${message.guild.me.displayName}` )
           .addField(`☁ **${person.displayName}** Dost Dard **${message.member.displayName}** Be andaze :`,
           `:heart_decoration:100٪ \n :sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart::sparkling_heart:`);
           

       message.channel.send(embed);
      
    }
}


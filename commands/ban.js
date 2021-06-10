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
     name:"ban",
     description:"ban member of server",

     async run (client,message, args){
       

       
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t Use that!')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')


        const usersmd=message.author.username;


        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0])return message.channel.send('PLS specify a user');
/*   Made by Mr Swift  */
        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry  \' bout that :/');
        if (!member.kickable) return message.channel.send('This user can,t be Baned.');

        if(!member.id === message.author.id) return message.channel.send('Bruh, you can\'t Ban Yourself. :/');

        let reason = args.slice(1).join(" ");

        var none = "";
        if(reason === none) reason = 'Unspecified';

/*   Made by Mr Swift  */
        member.ban({ days: 0, reason: `${reason}` })
          
          const banmember =new Discord.MessageEmbed()
           .setTitle('**𝐌𝐞𝐦𝐛𝐞𝐫 𝐁𝐚𝐧𝐞𝐝 <:bann:852598139999617055>**')
           .setThumbnail(member.user.displayAvatarURL())
           .addField('User Baned', member)
           .addField('Reason',reason)
           .setTimestamp()
           .setFooter(`Cmd By ${usersmd}  ${message.guild.me.displayName}`); 
           message.channel.startTyping();
           message.channel.send(banmember);
           message.channel.stopTyping();
           console.log(`\n\n------------------------ \n\n Ban Member : ${member} \n\n Reason : ${reason} \n\n by :${usersmd} \n\n Name guild : ${message.guild.me.displayName} \n\n Member ID : ${member.id}\n\n ------------------------`)
     }
    }
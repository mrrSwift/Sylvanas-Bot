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
     name:"unban",
     description:"unban member of server",

     async run (client,message, args){
       

       
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t Use that!')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = await client.users.fetch(args[0])
        const usersmd=message.author.username;
        if(!args[0])return message.channel.send('PLS specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry  \' bout that :/');
       

        if(!member.id === message.author.id) return message.channel.send('Bruh , what are you doing ?? :/');

        let reason = args.slice(1).join(" ");

        var none = "";
        if(reason === none) reason = 'Unspecified';

        try{
        message.guild.members.unban(member)
        } catch(error){
          console.log(error.message)
        }
          const unbanmember =new Discord.MessageEmbed()
           .setTitle('**𝐌𝐞𝐦𝐛𝐞𝐫 𝐔𝐧𝐁𝐚𝐧**')
           .setColor('#801ef7')
           .addField('User UnBaned', member)
           .addField('Reason',reason)
           .setTimestamp()
           .setFooter(`Cmd By ${usersmd}  ${message.guild.me.displayName}`); 

           message.channel.send(unbanmember);

           console.log(`\n\n----------------------- \n\n Unban Member : ${member} \n\n Reason : ${reason} \n\n by :${usersmd} \n\n Name guild : ${message.guild.me.displayName} \n\n Member ID : ${member.id}\n\n -----------------------`)
   

     }
    }
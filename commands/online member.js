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
     name:"online",
     description:"say number online member",

     async run (client,message, args){
        
        // First we use fetchMembers to make sure all members are cached
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            
            // We now have a collection with all online member objects in the totalOnline variable
            const usersmd=message.author.username; 
            const onmember = new Discord.MessageEmbed()
            .setColor('#279A96')
            .setTitle(`** (${totalOnline.size}) Online Member In Server**`)
            .setTimestamp()
            .setFooter(`Cmd By ${usersmd}  ${message.guild.me.displayName}`);
           
            message.channel.send(onmember);

            console.log(`Online Member [1] \n\n Online : ${totalOnline} `)
        });

        
       
     }
 }
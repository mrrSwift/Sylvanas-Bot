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
     name:"ststart",
     description:"i see",

     async run (client,message, args){

        await message.channel.messages.fetch({limit: 1}).then(messages => {
            message.channel.bulkDelete(messages)
        });
        const siteurl = args[0];
        const sitename = args[1];
        const stname = args[2];

        
        const say = new Discord.MessageEmbed()
            .setTitle('**استریم شروع شد **')
            .setColor('#279A96')
            .setURL(`${siteurl}`)
            .setDescription(`𝐒𝐢𝐭𝐞 ⌲ ${sitename} ╭(:clapper:)╮ \n ╭(:fire:)╮𝐒𝐭𝐫𝐞𝐚𝐦 𝐒𝐭𝐚𝐫𝐭𝐞𝐝 \n ╭(:trophy:)╮ 𝐍𝐚𝐦𝐞 : ${stname} \n ${siteurl} `)
            .setImage('https://cdn.discordapp.com/attachments/700381983418744933/733000360985100308/doc-2020-07-15-20-07-49.gif')
      

            message.channel.send(say);
       
     }
 }
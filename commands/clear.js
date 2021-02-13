/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');
const { sleep } = require("../functions.js");
 module.exports = {
     name:"clear",
     description:"clear message",

     async run (client,message, args){

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You cant Use command")
        /*   Made by Mr Swift  */
        const amount = args.join(" ");

        if(!amount) return message.reply('Pls say amount ')

        if (amount > 100) return message.reply('we cant remove (max Message = 100)')

        if (message.member.hasPermission('MANAGE_MESSAGES')) {
/*   Made by Mr Swift  */
        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        })}else {messages.reply('You Can\'t Delete Message')
    };/*   Made by Mr Swift  */
        const clerr = new Discord.MessageEmbed()
        .setTitle(`${amount} 𝐏𝐚𝐲𝐚𝐦 𝐏𝐚𝐜𝐤 𝐒𝐡𝐮𝐝 \n ${amount} Cleared`)
        .setColor('#000000')
        message.channel.startTyping();
         const mes2 = await  message.channel.send(clerr);
        message.channel.stopTyping();


        sleep(`\n\n----------------------- \n\n Clear Amount : ${amount}\n\n -----------------------`,1000)
      
  
        mes2.delete({ timeout: 4000, reason: 'It had to be done.' })
        
       
     }
 }
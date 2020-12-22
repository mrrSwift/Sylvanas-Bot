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
     name:"h",
     description:"help for you",

     async run (client,message, args){
        const help = new Discord.MessageEmbed()
        .setDescription(`**FOR EN =>%helpen \n برای فارسی => helpfa% **`)
/*   Made by Mr Swift  */
        .setTitle('Add To Your Server \n برای اد کرد ربات در سرور خود اینجا کلیک کنید ')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=726137789757915177&permissions=8&scope=bot')
        .addField('Made by','Mr Swift ')
        .setTimestamp()

        message.author.send(help);
        
       
     }
}
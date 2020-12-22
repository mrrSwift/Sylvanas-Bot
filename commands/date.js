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
     name:"date",
     description:"Say Date",

     async run (client,message, args){
        /*   Made by Mr Swift  */
        var all = new Date()
        var y = all.getFullYear();
        var mm = all.getMonth();
        var d = all.getDate();
        var m = mm+1;
        var date01 = [`${d}/${m}/${y}`];
        const dateee = new Discord.MessageEmbed()
        .setTitle('Date')
        .setColor('#7bfa20')
        .setDescription(`**${date01}**`)
        .setFooter( `${message.guild.me.displayName}`);
            message.reply(dateee);

            console.log(`----------------------- \n\nUse Date [1] \n\n Date : ${date01}\n\n -----------------------` )
       
     }
 }
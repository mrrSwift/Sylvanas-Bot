/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
const moment = require('jalali-moment');
 module.exports = {
     name:"تاریخ",
     description:"Say Date",

     async run (client,message, args){
        /*   Made by Mr Swift  */
        var all = new Date();
        var num = '1';
        var y = all.getFullYear();
        var mm = all.getMonth();
        var d = all.getDate();
        var m = mm+1;
        var date00 = [`${m}/${d}/${y}`];
        var date="";
       
       
        date = moment(`${date00}`).locale('fa').format('YYYY/M/D');
             /*   Made by Mr Swift  */
        const dateee = new Discord.MessageEmbed()
        .setTitle('𝐓𝐚𝐫𝐢𝐤𝐡𝐞 𝐒𝐡𝐚𝐦𝐬𝐢')
        .setColor('#7bfa20')
        .setDescription(`**${date}**`)
        .setFooter( `${message.guild.me.displayName}`);

            message.reply(dateee);

            console.log(`-----------------------\n\nUse Date Jalili [1] \n\n Date : ${date00}\n\n -----------------------` )
       
     }
 }
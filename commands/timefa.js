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
     name:"time",
     description:"say time iran",

     async run (client,message, args){
        var all = new Date();
        var h = all.getHours();
        var m = all.getMinutes();
        var s = all.getSeconds();
        const time = new Discord.MessageEmbed()
        .setTitle("𝐓𝐢𝐦𝐞(server)")
        .setColor('#18f285')
        .setDescription (`**${h}:${m}:${s}**`) 

        const timme = await message.reply(time);





        
        
        
            
            var t1 = setInterval(startTime, 1000);
        function startTime() {
            
            var all = new Date();
        var h = all.getHours();
        var m = all.getMinutes();
        var s = all.getSeconds();
        const time01 = new Discord.MessageEmbed()
        .setTitle("𝐓𝐢𝐦𝐞(server)")
        .setColor('#18f285')
        .setDescription (`**${h}:${m}:${s}**`) 
       
         
        timme.edit(time01);
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
        
           }
           var t2 = setTimeout(startTime01,5500);
           function startTime01() {
            clearInterval(t1)
        }
     }
 }
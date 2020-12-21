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
     name:"ping",
     description:"Test Command",

     async run (client,message, args){

        const ping = new Discord.MessageEmbed()
            .setDescription(`🏓 Pong!
            Latency is ${Math.floor(message.createdTimestamp - message.createdTimestamp)}ms
            API Latency is ${Math.round(client.ws.ping)} ms`);

            message.channel.send(ping);
            console.log(`\n\n 『 Ping 』\n\n 『 API Latency is ${Math.round(client.ws.ping)} ms 』 `)
       
     }
 }
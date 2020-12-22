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
     name:"reroll",
     description:"i see",

     async run (client,message, args){
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Shoma in ghabelit ro ndarid')

        if(!args[0]) return message.channel.send("pls write Giveaway ID")

        let giveaways = client.giveawaysManager.giveaways.find((g)=> g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g)=> g.messageID === args[0]);
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
        if (!giveaways) return message.channel.send("Cant find Giveaway");

        client.giveawaysManager.reroll(giveaways.messageID).then(() => {
            message.channel.send("Finded!");
        }).catch((err) => {
            message.channel.send("GIveaway For "+messageID+", Not find ");
        });

     }
 }
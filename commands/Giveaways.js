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

const ms =require('ms')
 module.exports = {
     name:"giveaways",
     description:"i see",

     async run (client,message, args){
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You Cant use command')

        let channel = message.mentions.channels.first();

        if(!channel) return message.channel.send('pls mention Channel ');

        let giveawayDuration = args[1];
         
        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('pls write giveaway Duration');

        let giveawayWinner = args[2];

        if (isNaN(giveawayWinner)|| (parseInt(giveawayWinner)<= 0)) return message.channel.send('pls write name of Gift  ');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send(' ok Bye :|');
/*   Made by Mr Swift  */
        client.giveawaysManager.start(channel,{
            
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinner,
    messages: {
        giveaway: "@everyone\n\n🎉🎉 **Giveaway** 🎉🎉",
        giveawayEnded: "@everyone\n\n🎉🎉 **Giveaway Ended ** 🎉🎉",
        timeRemaining: "Time Remaining: **{duration}**!",
        inviteToParticipate: " Use ☣ for invite To Participate ",
        winMessage: " You Win {winners} **{prize}**!",
        embedFooter: `${message.guild.me.displayName}`,
        noWinner: "Giveaway is dead :(.",
        hostedBy: "Hosted By: {user}",
        winners: "Winner",
        endedAt: "Ended at ",
        units: {
            seconds: "Sec",
            minutes: "Min",
            hours: "H",
            days: "D",
            pluralS: false
            }

         }
      })

      message.channel.send(`ًStarted in  ${channel}`)
  
      console.log(`Giveaways [1] \n ${channel}`)
     }
 }
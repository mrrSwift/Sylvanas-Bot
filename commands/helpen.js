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
var pagination = require('discord.js-pagination');
 module.exports = {
     name:"help",
     description:"Show Commands list",

     async run (client,message, args){

        const help = new Discord.MessageEmbed()
        .setTitle('For Add To Your Server ')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=726137789757915177&permissions=8&scope=bot')
        .addField('Made by','Mr Swift ')
        .setImage('https://cdn.discordapp.com/attachments/794975466523328559/810215124110934076/sylvanas.gif')
        .setTimestamp()
       
        const moderatoinEN = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`%kick`','Kicks a member from your server via mention or ID')
        .addField('`%ban`','Bans a member from your server via mention or ID')
        .addField('`%clear`','Purger messages')
        .addField('`%warn`','Warn a member')
        .addField('`%warnings`','Showing individual warnings ')
        .addField('`%delwarn`','Clear the warning')
        .setTimestamp()


        

        const funEN = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`%meme`','Generates a random meme')
        .addField('`%ascii`','Convert text into ascii')
        .addField('`%bot`','The robot answers')
        .addField('`%love`','The amount of love the other party has for you')
        .addField('`%gay`','Your percentage of being gay')
        .addField('`%lesbian`','Your percentage of being lesbian')
        .addField('`%reddit`',' Use one word of list (iran , wow , karma , dota2 , pubg) ')
        .addField('`%kiss`','Kiss someone')
        .setTimestamp()

       

        const utilityEN = new Discord.MessageEmbed()
        .setTitle('Utility')
        .addField('`%ping`','Get the bot\'s API Ping')
        .addField('`%weather`','Checks weather forecast for provided location')
        .addField('`%time`','Say the Time')
        .addField('`%date`','Say the Date')
        .addField('`%Poll`','Create a poll')
        .addField('`%Say`','Repeat your word')
        .addField('`%rps`','Game Rock paper scissors')
        .addField('`%avatar`',' Send Avatar with Mention')
        .addField('`%setwelcomech`',' set Channel Welcome  ')
        .addField('`%giveaways`','Create a giveaway  (%giveaway {Channel name} {time} \n {Number of winners} {Award name})')
        .addField('`%reroll`','reroll giveaway  (%reroll {giveaway ID} )')
        .addField('`%hentai`','Send hentai Gif (NFSW)')
        .addField('`%anime`','Send anime photo for you')
        .setTimestamp()

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/

        

        const pagesEN = [
            help,
            moderatoinEN,
            funEN,
            utilityEN
        ];
        

        
        const emojilist = ["👈🏻","👉🏻"];

        const timeout = '120000';

        pagination(message, pagesEN, emojilist, timeout)


     }
 }
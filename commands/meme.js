/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const randompuppy = require ('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name:"meme",
    description:"send meme in channel",

    async run (client,message, args){
     
       const subReddits = ["meme","memes","me_irl","funny"]
     

       const random = subReddits[Math.floor(Math.random()* subReddits.length)]

       const img =await randompuppy(random);

/*   Made by Mr Swift  */
       const embed = new Discord.MessageEmbed()
       .setColor('#279A96')
       .setImage(img)
       .setTitle(`**Your Meme**`)
       
      message.channel.send(embed);
      console.log(`Meme [1] \n\n URL: ${img}`)
    }
}
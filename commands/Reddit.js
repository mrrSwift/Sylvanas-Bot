/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const Discord = require('discord.js');
const randompuppy = require ('random-puppy');
 module.exports = {
     name:"reddit",
     description:"i see",

     async run (client,message, args){
         if(!args[0]) return message.reply("pls ")

         const costum = args[0]

         if(costum === "iran"){
            const subReddits = [`Aryamehr`]
     

            const random = subReddits[Math.floor(Math.random()* subReddits.length)]
     
            const img =await randompuppy(random);
     
     
            if(!img)return message.reply("Chizi peyda nkrdm :(")
           
            
           message.channel.send(img);
           console.log('Reddit Iran [1]')
         }

         if(costum === "mia"){

          // getting real images
         DabiClient.nsfw.real.mia().then(json => {
          message.channel.send(json.url);
          // outputs data with image url, possible source and other stuff
         }).catch(error => {
          console.log(error);
          // outputs error
         });

      console.log('mia [1]')
       }

         if(costum === "wow"){
            const subReddits = [`classicwow`]
     

            const random = subReddits[Math.floor(Math.random()* subReddits.length)]
     
            const img =await randompuppy(random);
     
     
            if(!img)return message.reply("Chizi peyda nkrdm :(")
           
            
           message.channel.send(img);
           console.log('Reddit WOW [1]')
         }

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/

         if(costum === "Karma "){
            const subReddits = [`meme`,"memes"]
     

            const random = subReddits[Math.floor(Math.random()* subReddits.length)]
     
            const img =await randompuppy(random);
     
     
            if(!img)return message.reply("Chizi peyda nkrdm :(")
           
            
           message.channel.send(img);
           console.log('Reddit Karma [1]')
         }
         if(costum === "dota2"){
            const subReddits = [`DotA2`]
     

            const random = subReddits[Math.floor(Math.random()* subReddits.length)]
     
            const img =await randompuppy(random);
     
     
            if(!img)return message.reply("Chizi peyda nkrdm :(")
           
            
           message.channel.send(img);
           console.log('Reddit Dota2 [1]')
         }
        
         if(costum === "pubg"){
            const subReddits = [`PUBGMobile`]
     

            const random = subReddits[Math.floor(Math.random()* subReddits.length)]
     
            const img =await randompuppy(random);
     
     
            if(!img)return message.reply("Chizi peyda nkrdm :(")
           
            
           message.channel.send(img);
           console.log('Reddit PUBG [1]')
         }
     }
 }
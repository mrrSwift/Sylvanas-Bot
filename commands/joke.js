/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const giveMeAJoke = require('give-me-a-joke');
 
 module.exports = {
    name:"joke",
    description:"i see",

    async run (client,message, args){
        message.channel.startTyping();
        giveMeAJoke.getRandomCNJoke (function(joke) {
            message.channel.send(`${joke}`)
        });
        message.channel.stopTyping();
      
         
        console.log(`Joke [1]`)
          
    }
}

const Discord = require('discord.js');
const figlet = require('figlet');
 module.exports = {
     name:"ascii",
     description:"Say Date",

     async run (client,message, args){
         if (!args[0]) return message.channel.send('pls provide some text');


         msg = args.join("");

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/

         figlet.text(msg, function (err, data){
             if (err){
                 console.log('Something went Wrong');
                 console.dir(err);
             }
             if (data.length > 2000) return message.channel.send(' Max Charecter 2000 ')

             message.channel.send('```'+data+'```')
         })
        

         console.log('Ascii [1]')
        
       
     }
 }
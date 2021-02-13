/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
   
    description: "Says your input via the bot",
    
    run: (client, message, args) => {
        

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the required permissions to use this command.");

        if (!args[0])return message.reply("Nothing to say?");

    

        if (args[0].toLowerCase() === "everyone") {

            const embed = new MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor('#12fffb');

            message.delete();
            message.channel.send('@everyone',embed);



            /////////////
        }else if (args[0].toLowerCase() === "embed") {
            
            if (!args[1])return message.reply("Nothing to say?")
            const embed = new MessageEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor('#12fffb');

                message.delete();
            message.channel.send(embed);


            ///////////
        } else {
            message.delete();
            message.channel.send(args.join(" "));
        }
    }
}
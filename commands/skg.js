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
const { promptMessage } = require("../functions.js");
const chooseArr = ["🗻", "📰", "✂"];
 module.exports = {
     name:"rps",
     description:"i see",

     async run (client,message, args){
        const embed = new Discord.MessageEmbed()
        .setColor("#ffffff")
        .setDescription("`Play!‍‍`")
        .setTimestamp();

    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    await m.reactions.removeAll();

    embed
        .setDescription("")
        .addField(result, `${reacted} vs ${botChoice}`);
        message.channel.startTyping();
    m.edit(embed);
    message.channel.stopTyping();
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
    function getResult(me, clientChosen) {
        if ((me === "🗻" && clientChosen === "✂") ||
            (me === "📰" && clientChosen === "🗻") ||
            (me === "✂" && clientChosen === "📰")) {
                return "Win!";
        } else if (me === clientChosen) {
            return "!";
        } else {
            return "Game Over!";
        }
    }
   
}

}
       
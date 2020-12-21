/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
const weather = require('weather-js');
module.exports = {
    name:"weather",
    description:"send weather in channel",

    async run (client,message, args){
/*   Made by Mr Swift  */
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
            if (result === undefined || result.length === 0) return message.channel.send(`**Invalid** location`);

            var current = result[0].current;
            var location = result[0].location;
/*   Made by Mr Swift  */
            const weatherinfo = new Discord.MessageEmbed()
             .setDescription(`**${current.skytext}**`)
             .setAuthor(`𝐖𝐞𝐚𝐭𝐡𝐞𝐫 𝐟𝐨𝐫𝐞𝐜𝐚𝐬𝐭 𝐟𝐨𝐫 ${current.observationpoint}`)
             .setThumbnail(current.imageUrl)
             .setColor(0x111111)
             .addField(`𝐓𝐢𝐦𝐞𝐳𝐨𝐧𝐞`,`UTC ${location.timezone}`,true)
             .addField(`𝐃𝐞𝐠𝐫𝐞𝐞 𝐓𝐲𝐩𝐞`, `𝐂𝐞𝐥𝐬𝐢𝐮𝐬`,true)
             .addField(`𝐓𝐞𝐦𝐩𝐞𝐫𝐚𝐭𝐮𝐫𝐞`,`${current.temperature}`,true)
             .addField(`𝐖𝐢𝐧𝐝`,`${current.winddisplay}`,true)
             .addField(`𝐅𝐞𝐞𝐥𝐬 𝐥𝐢𝐤𝐞`,`${current.feelslike}`,true)
             .addField('𝐇𝐮𝐦𝐢𝐟𝐢𝐭𝐲', `${current.humidity}%`)

             message.channel.send(weatherinfo);


        })


      
    }
}
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
    name:"weatheer",
    description:"send weather in channel farsi",

    async run (client,message, args){

        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
            if (result === undefined || result.length === 0) return message.channel.send(`**Invalid** location`);
            const usersmd=message.author.username; 
            var current = result[0].current;
            var location = result[0].location;
/*   Made by Mr Swift  */
            const weatherfa = new Discord.MessageEmbed()
             .setDescription(`**${current.skytext}**`)
             .setAuthor(` وضعیت اب و هوا برای ${current.observationpoint}`)
             .setThumbnail(current.imageUrl)
             .setColor(0x111111)
             .addField(`منطقه زمانی `,`UTC${location.timezone} `,true)
             .addField(`واحد  دما`, `سانتیگراد`,true)
             .addField(`دما`,`${current.temperature}`,true)
             .addField(`سرعت باد و جهت `,`${current.winddisplay}`,true)
             .addField(`Feels like`,`${current.feelslike}`,true)
             .addField('رطوبت', `${current.humidity}%`)
             .setFooter( `  ${message.guild.me.displayName}`);
/*   Made by Mr Swift  */
              message.channel.send(weatherfa);

        })


      
    }
}
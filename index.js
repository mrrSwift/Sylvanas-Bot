/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/

console.log(`\n\nW8 For 20s\n\n`)

const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json")

const token  = `${config.botstat.tokenbot}`;

const{ readdirSync } = require('fs');

const fs = require('fs')

const { join } = require('path');

const { fileURLToPath } = require('url');

client.commands = new Discord.Collection();

const perfix = `${config.botstat.prefix}`;

const db = require('quick.db');

const Canvas = require(`discord-canvas`);

const commandsFiles = readdirSync(join(__dirname,"commands")).filter(file => file.endsWith(".js"))
/*                           Made by Mr Swift                              */
const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "☣"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

for (const file of commandsFiles){
    const command = require(join(__dirname,"commands",`${file}`));
    client.commands.set(command.name, command);
}




/*                         Made by Mr Swift                            */
client.on('ready',()=> {
    console.log("\n\nSylvanas is Ready\n\n");
    client.user.setActivity("Type %link For help",{
        name: 'Type %link or %help',
        type: 'STREAMING',
        url: `${config.botstat.twichtUrl}`
	} ).catch(console.error);

});
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/

client.on("message",async message => {

    if(message.content.startsWith(`${perfix}link`)){
        const link = new Discord.MessageEmbed()
        .setTitle('Add To Your Server \n برای اد کرد ربات در سرور خود اینجا کلید کنید ')
        .setURL(`${config.botstat.invUrl}`)
        .setTimestamp()
        

        message.channel.send(link);

    }

    if(message.content.startsWith(`${perfix}help`)){
        /*                           Made by Mr Swift                              */
        const link = new Discord.MessageEmbed()
        .setTitle('Add To Your Server \n برای اد کرد ربات در سرور خود اینجا کلیک کنید ')
        .setURL(`${config.botstat.invUrl}`)
        .setDescription('FOR EN =>%helpe\n برای فارسی => helpfa% \n\n Just Send in Server Channel\n این دستورات فقط در سرور چنل کار میکنند و در دایرکت کار نمیکند')
        .setTimestamp()
        

        message.channel.send(link);

    }


/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
    

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;


    if (message.content.startsWith(perfix)){
        const args = message.content.slice(perfix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
/*                           Made by Mr Swift                              */
        if(!client.commands.has(command)) return;

        try{
            client.commands.get(command).run(client,message,args);
        }catch(error){
            console.log(error);
        }
    }
})





client.on('guildMemberAdd', async member => {
    let chx = db.get(`welchannel_${member.guild.id}`);

    if (chx === null){
        return;
    }

    console.log('welcome Run')

    const image = await new Canvas.Welcome()
      .setUsername(`${member.displayName}!`)
      .setMemberCount(`${member.guild.memberCount}`)
      .setDiscriminator(`SYL-TM`)
      .setGuildName(`${member.guild.name}`)
      .setAvatar(`${member.user.displayAvatarURL({ format: 'jpg' })}`)
      .setColor("border", "#8015EA")
      .setColor("username-box", "#8015EA")
      .setColor("discriminator-box", "#8015EA")
      .setColor("message-box", "#8015EA")
      .setColor("title", "#8015EA")
      .setColor("avatar", "#8015EA")
      .setBackground("./welcome1.jpg")
      .toAttachment();
    
    
    
    
    
    const attachment = new Discord.MessageAttachment(image.toBuffer(), 'welcome-image.png');
    
        const channelnam =client.channels.cache.get(chx)
        
        channelnam.send(`${member}`,attachment)
        
        console.log('welcome end')
    
    
})




client.login(token);

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/


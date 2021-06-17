/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
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
        reaction: "🎁"
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
    setInterval(() => {
        
       
        
        
        client.user.setActivity(`Type ${perfix}help or ${perfix}link`).catch(console.error);


    
        
      }, 5000);

      setInterval(() => {
        
    
       
        
        client.user.setActivity('Open Source🌴').catch(console.error);
        
      }, 11000);
    

});
    


/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

client.on("message",async message => {
    message.channel.startTyping();
    if(message.content.startsWith(`${perfix}link`)){
        const link = new Discord.MessageEmbed()
        .setTitle('Add To Your Server \n برای اد کرد ربات در سرور خود اینجا کلید کنید ')
        .setDescription(' Use the helpen/helpfa command for help')
        .setURL(`${config.botstat.invUrl}`)
        .setTimestamp()
        

        message.channel.send(link);

    }
    message.channel.stopTyping();







    


  
    let bads = db.get(`badchannel_${message.guild.id}`)

if (message.guild.id === bads){

    var none01 = "3 warn";

    var none02 = "6 warn";

    for (i=0;i<=10;i++){
        fohsh = config.botstat.word
           
            const argss = message.content.toLowerCase().trim().split(/ +/) ;

        
    if(fohsh.includes(argss[i]) === true){
        let warnings = db.get(`warnings_${message.guild.id}_${message.author.id}`);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        if(warnings !== null) { 
             
            db.add(`warnings_${message.guild.id}_${message.author.id}`, 1);
        }else { 
    
            db.set(`warnings_${message.guild.id}_${message.author.id}`, 1);
        }
        message.reply('Warn !!!')


        if(warnings === 2) {
            const member = message.member
            

             member.kick(none01)
             message.channel.send(` kick ${member} Because it has already received three warnings `)
             console.log(`\n\n----------------------- \n\n User kick For 3 Warn \n\n Username:${member}\n\n-----------------------  `)
             member.send(`You Kicked ${message.guild.name} for the Follwoing reason :\'${reason}\'`);
            };
             if(warnings === 5) {
                const member = message.member
    
                 member.ban(none02)
                 message.channel.send(` Ban ${member} Because it has already received Six warnings <:bann:852598139999617055>`)
                 console.log(`\n\n----------------------- \n\n User Ban For 6 Warn \n\n Username:${member}\n\n-----------------------  `)
                 member.send(`You Baned ${message.guild.name} for the Follwoing reason :\'${reason}\'`);
                };
    

    }
        


       
                message.delete();
    }
    }
}
   
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
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

    console.log('Welcome Run')

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
        message.channel.startTyping();
        channelnam.send(`${member}`,attachment)
        message.channel.stopTyping();
        console.log('Welcome End')
    
})




client.login(token);

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/


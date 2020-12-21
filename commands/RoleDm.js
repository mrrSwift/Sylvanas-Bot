

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
const config = require('../config.json')
const Discord = require('discord.js');
module.exports = {
    name:"roledm",
    description:"i see",

    async run (client,message, args){

        const idowner =  `${config.botstat.ownerID}`
        if(message.author.id === idowner) {
        let role = message.mentions.roles.first();
        let msg = args.slice(1).join(" ");
        
        if(!role) {
            message.author.send("No valid role mentioned!");
            return;
        }

        

        if(!msg || msg.length <= 1) {
            const embed = new Discord.MessageEmbed()
                .addField(":x: Failed to send", "Message not specified")
                .addField(":eyes: Listen up!", "Every character past the role mention will be sent,\nand apparently there was nothing to send.");
            message.channel.send({ embed: embed });
            return;
        }


        let memberarray = role.members.array();
        let membercount = memberarray.length;
        let botcount = 0;
        let successcount = 0;
        console.log(`Responding to ${message.author.username} :  Sending message to all ${membercount} members of role ${role.name}.`)
        for (var i = 0; i < membercount; i++) {
            let member = memberarray[i];
            if (member.user.bot) {
                console.log(`Skipping bot with name ${member.user.username}`)
                botcount++;
                continue
            }
            let timeout = Math.floor((Math.random() * (10 - 1)) * 1000) + 10;
            
            await sleep(timeout);
            if(i == (membercount-1)) {
                console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
            } else {
                console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
            }
            try {
                member.send(`${msg} `);
                successcount++;
            } catch (error) {
                console.log(`--Failed to send DM! ` + error)
            }
        }
        console.log(`Sent ${successcount} ${(successcount != 1 ? `messages` : `message`)} successfully, ` +
            `${botcount} ${(botcount != 1 ? `bots were` : `bot was`)} skipped.`);


            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

        }
    }


}
   
        

        

    

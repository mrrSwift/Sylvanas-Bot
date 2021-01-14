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
 module.exports = {
     name:"gharyab",
     description:"say time iran",

     async run (client,message, args){

        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Lotfan in dastor ro dar Channel NSFW estfade konid.")

        const idliser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!idliser)return message.reply("Shakhs morde nazar ro Mention kon :/");

        if ( idliser === 'undefined') return message.reply("```Not Found  ```")
       
        const time = new Discord.MessageEmbed()
        .addField(`gharyab  . .` , '█                            10%')

        const timme = await message.channel.send(`${idliser}`,time);


/*   Made by Mr Swift  */
            var t1 = setTimeout(startTime, 1000);
        function startTime() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`gharyab  . . .` , '███                         20%')
       
         
        timme.edit(time01);

        
           }

           var t1 = setTimeout(startTime01, 1000);
        function startTime01() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`gharyab  . . . . .` , '████████                   60%')
       
         
        timme.edit(time01);

        
           }
           var t1 = setTimeout(startTime02, 1000);
        function startTime02() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`gharyab  . . . . . . . . .` , '████████████    90%')
       
         
        timme.edit(time01);

        
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
           var t1 = setTimeout(startTime03, 1000);
        function startTime03() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`gharyab  . . . . . . . . . . .  .` , '█████████████ 100%')
       
         
        timme.edit(time01);

           }
          
           var t1 = setTimeout(startTime03, 1000);
        function startTime03() {
        
            var javab = ["","• قطر دهانه غار : 1 سانت  \n• عمق غار : ۱۵ سانت\n•ظرفیت : ۱ ژاپنی"
            ,"• قطر دهانه غار : 7 سانت  \n• عمق غار : 30 سانت\n• ظرفیت : ۳ سفید پوست ",
        "• قطر دهانه غار : Eror404  \n• عمق غار : ......\n• ظرفیت : ......",
        "• قطر دهانه غار : 1 متر  \n• عمق غار :مسیر تا دهان ادامه دارد\n• ظرفیت :5 سیاه پوست",
        "• قطر دهانه غار : ورودی غار بسه میباشد   \n• عمق غار : معلوم نیست\n• ظرفیت :معلوم نیست",
        "• قطر دهانه غار : غار علی صدر  \n• عمق غار : ناشناخته\n• ظرفیت : نامحدود",
        "• قطر دهانه غار : غاری یافت نشود احتمالا شخص آلت دارد  \n• عمق غار : ......\n• ظرفیت : ......"
       ];
            var jv = Math.floor(Math.random() * 7) + 1;
    
            const say = new Discord.MessageEmbed()
                .setDescription(`${javab[jv]}`)
       
         
        timme.edit(say);

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
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);

        clearTimeout(t5);
        console.log(`Gharyab [1]`)
     }
 }
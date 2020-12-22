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
     name:"lisyab",
     description:"say time iran",

     async run (client,message, args){

        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Lotfan in dastor ro dar Channel NSFW estfade konid.")

        const idliser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!idliser)return message.reply("Shakhs morde nazar ro Mention kon :/");

        if ( idliser === 'undefined') return message.reply("```Chizi peyda nkrdm  ```")
       
        const time = new Discord.MessageEmbed()
        .addField(`koslis  . .` , '█                            10%')

        const timme = await message.channel.send(`${idliser}`,time);



            var t1 = setTimeout(startTime, 1000);
        function startTime() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`koslis  . .` , '███                         20%')
       
         
        timme.edit(time01);

        
           }
/*   Made by Mr Swift  */
           var t2 = setTimeout(startTime01, 1000);
        function startTime01() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`koslis  . .` , '████████                   60%')
       
         
        timme.edit(time01);

        
           }
           var t3 = setTimeout(startTime02, 1000);
        function startTime02() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`koslis  . .` , '████████████    90%')
       
         
        timme.edit(time01);

        
           }
           var t4 = setTimeout(startTime03, 1000);
        function startTime03() {
        
        const time01 = new Discord.MessageEmbed()
        .addField(`koslis  . .` , '█████████████ 100%')
       
         
        timme.edit(time01);

           }
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
           var t5 = setTimeout(startTime03, 1000);
        function startTime03() {
        
            var javab = ["","• میزان کص لیسی : %100\n • تواناییی لیسیدن 3 دختر همزمان• \n رتبه لیسری : کص لیس افسانه ای"
            ,"• میزان کص لیسی : %300\n • بدون محدودیت تعداد دختر میتواند بلیسد\n • رتبه لیسری : متی هلیش",
        "شما یک خایمال هستید نه لیسر\n • تواناییی مالیدن انقد میمالد تا زخم شود\n• رتبه خایمالی : خایمال ارشد",
        "• میزان کص لیسی : %85\n • تواناییی لیسیدن 2.5 دختر همزمان\n• رتبه لیسری : لیسر رو به پیشرفت",
        "• میزان کص لیسی : %200\n • تواناییی لیسیدن 5 دختر همزمان\n• رتبه لیسری : کص لیس باز نشسته",
        "• میزان کص لیسی : %75\n• تواناییی لیسیدن 2 دختر همزمان\n• رتبه لیسری : استاد",
        "• میزان کص لیسی : %0\nفرد مورد نظر پاک است درود بر تو فرزندم",
        "• میزان کص لیسی : %30\n • تواناییی لیسیدن 1 دختر به زور\n • رتبه لیسری : کص لیس تازه کار",
        "• میزان کص لیسی : %10\n • تواناییی لیسیدن نصفه لیس میزند ول می کند\n• رتبه لیسری : کص لیس بدبخت"];
            var jv = Math.floor(Math.random() * 9) + 1;
    
            const say = new Discord.MessageEmbed()
                .setDescription(`${javab[jv]}`)
       
         
        timme.edit(say);

        }
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
        console.log(`lisyab [1]`)
     }
 }
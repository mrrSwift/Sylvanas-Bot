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
var pagination = require('discord.js-pagination');
 module.exports = {
     name:"helpfa",
     description:"Show Commands list",

     async run (client,message, args){

        const help = new Discord.MessageEmbed()
        .setTitle('برای اد کرد ربات در سرور خود اینجا کلیک کنید ')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=726137789757915177&permissions=8&scope=bot')
        .setTimestamp()
       
        


        const moderatoinFA = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .setDescription('برای استفاده از ربات باید در اول دستور % بزارید')
        .addField('`%kick`','کیک کردن عضو با میشن کردن یا نوشت ایدی آن بعد دستور ')
        .addField('`%ban`','بن کردن عضو با میشن کردن یا نوشت ایدی آن بعد دستور')
        .addField('`%warn`','اخطاز دادن به فرد با میشن کردن آن')
        .addField('`%warnings`','نشان دادن تعداد اخطار های فرد ')
        .addField('`%delwarn`','پاک کردن اخطار های فرد')
        .addField('`%clear`','(بیشتر از این رقم را دیسکورد اجازه نمیدهد)پاک کردن پیام ها تا ۱۰۰ عدد')
        .setTimestamp()

       
        const funFA = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setDescription('برای استفاده از ربات باید در اول دستور % بزارید')
        .addField('`%meme`','ارسال یک میم بصورت اتفاقی')
        .addField('`%ascii`','تبدیل متن شدما به کد ascii')
        .addField('`ربات`','ارتباط بر قرار کردن با ربات ')
        .addField('`%love`','مقدار عشقی ک طرف مقابل به شما دارد')
        .addField('`%haval`','نشون دادن هول بودن فرد با میشن کردن ان')
        .addField('`%gharyab`','درصد گشادی شخص میشن شده   این دستور فقط تو چنل های +۱۸ کار میکند')
        .addField('`%lisyab`','درصد لیصریه شخص میشن شده   این دستور فقط تو چنل های +۱۸ کار میکند')
        .addField('`%gay`','درصد گی بودن شما را نشان میدهد')
        .addField('`%lesbian`','درصد لزبین بودن شما را نشان میدهد')
        .addField('`%kiss`','بوسیدن فرد مورد نظر ')
        .addField('`%reddit`','شما با استفاده از کلمات زیر میتوانید میم های مختلف و مربوط به همون زمینه رو ببینید \n iran , wow , karma , dota2 , pubg')
        .setTimestamp()

       
/*   Made by Mr Swift  */
        const utilityFA = new Discord.MessageEmbed()
        .setTitle('Utility')
        .setDescription('برای استفاده از ربات باید در اول دستور % بزارید')
        .addField('`%ping`','تست ربات')
        .addField('`%online`',' نشان دادن تعداد نفرات انلاین')
        .addField('`%weatheer`','برسی کردن وضعیت آب و هوای منطقه مورد نظر')
        .addField('`ساعت`','نشان دادن ساعت')
        .addField('`تاریخ`','نشان دادن تاریخ شمسی ')
        .addField('`%Poll`','ساخت نظر سنجی')
        .addField('`%Say`','تکرار حرف شما')
        .addField('`%avatar`','  ارسال عکس پروفایل با تگ کردن')
        .addField('`%setwelcomech`','  تنظیم چنل خوش اومد گویی')
        .addField('`%delwelcomech`','   پاک کردن چنل خوش آمدگویی تنظیم شده    ')
        .addField('`%rps`','سنگ کاغذ قیچی بازی کردن با ربات')
        .addField('`%giveaways`','ساخت قرعه کشی  (%giveaway {نام چنل} {زمان قرعه کشی} \n {تعداد برنده ها} {اسم جایزه})')
        .addField('`%reroll`','قرعه کشیه دوباره   (%reroll {ایدی قرعه کشی مورد نظر} )')
        .addField('`%hentai`','ارسال گیف یا عکس هنتای')
        .addField('`%anime`','ارسال عکس انیمه')
        .setTimestamp()
        

        

        
        const pagesFA = [
            help,
            moderatoinFA,
            funFA,
            utilityFA
        ];

        /*   Made by Mr Swift  */
        const emojilist = ["👈🏻","👉🏻"];

        const timeout = '120000';

        pagination(message, pagesFA, emojilist, timeout)


     }
 }
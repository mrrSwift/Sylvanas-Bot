
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                                                                         */
/***************************************************************************/
module.exports = {
    name:"fbi",
    description:"i see",

    async run (client,message, args){
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the required permissions to use this command.\n shoma permissions mord nazar ro ndarid");
/*   Made by Mr Swift  */

        const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply(' Please join a voice channel first!');
		}
/*   Made by Mr Swift  */
		const connection = await voiceChannel.join();
	    const dispatcher=connection.play('https://unliimiitedworld.000webhostapp.com/fbi.mp3');

			dispatcher.on('finish', () => voiceChannel.leave());
		

      
    }
}

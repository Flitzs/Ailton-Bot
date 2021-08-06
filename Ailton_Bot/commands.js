const prefix = '!';
const Discord = require('discord.js');
const { DiscordAPIError } = require('discord.js');
const newEmbed = new Discord.MessageEmbed();

module.exports = async function gotMessage(msg){
    const x = msg.content;
    console.log(x);
    if(x.startsWith(`${prefix}`)){
        var an = msg.content.substr(1);
        console.log(an)
        if(!isNaN(an)){
            let d = an;
            var r = Math.floor(Math.random() * d + 1);
            msg.reply('\n`'+ r + '` ⇐ 1d' + d);
        }
    } 
    if (an == ('ping')) {
		msg.channel.send('Pong 🏓');
	} else if (an == (`beep`)) {
		msg.channel.send('Bop 🤖');
	} else if (an == (`server-info`)) {
        msg.reply(`\nServer name: ${msg.guild.name}   \nTotal members: ${msg.guild.memberCount}`);
    } else if (an == (`user-info`)){
        msg.reply(`\nUsername: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    } else if (an == (`rules`)){
        msg.channel.send(newEmbed);
    }
    if (r === 1){
        msg.channel.send('`F is in the chat boyz`');
    } else if (r === 20){
        msg.channel.send('`NOICE`');
    }
}

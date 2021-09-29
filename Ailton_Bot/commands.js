const prefix = '!';
const Discord = require('discord.js');
const { DiscordAPIError } = require('discord.js');
const newEmbed = new Discord.MessageEmbed();
const fetch = require('node-fetch')

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
		msg.channel.send('🏓');
	} else if (an == (`beep`)) {
		msg.channel.send('Bop 🤖');
	} else if (an == (`server-info`)) {
        msg.reply("\n`Server name: ${msg.guild.name}   \nTotal members: ${msg.guild.memberCount}`");
    } else if (an == (`user-info`)){
        msg.reply("\n`Username: ${msg.author.username}\nYour ID: ${msg.author.id}`");
    } else if (an == (`rules`)){
        msg.channel.send(newEmbed);
    } else if(an == ('gif')){
        let url = `https://g.tenor.com/v1/search?q=animekiss&key=&limit=8`;
        let response =  await fetch(url);
        let jason = await response.json();
        console.log(jason)
        //msg.channel.send(jason.results[1])   
        msg.channel.send(`https://tenor.com/view/kiss-matthew-mercer-matt-mercer-critical-role-gif-13669574`)
    }
    if (r === 1){
        msg.channel.send('`F is in the chat boyz`');
    } else if (r === 20){
        msg.channel.send('`NOICE`');
    }
}

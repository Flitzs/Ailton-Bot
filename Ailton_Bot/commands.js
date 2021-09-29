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
            msg.reply('\n` '+ r +' ` ⇐ 1d' + d);
        }
    } 
    let tokens = msg.content.split(" ")
    if (tokens[0] == ('ping')) {
		msg.channel.send('🏓');
	} else if (tokens[0] == (`beep`)) {
		msg.channel.send('Bop 🤖');
	} else if (tokens[0] == (`server-info`)) {
        msg.reply("\n`Server name: ${msg.guild.name}   \nTotal members: ${msg.guild.memberCount}`");
    } else if (tokens[0] == (`user-info`)){
        msg.reply("\n`Username: ${msg.author.username}\nYour ID: ${msg.author.id}`");
    } else if (tokens[0] == (`rules`)){
        msg.channel.send(newEmbed);
    } else if(tokens[0] == ('!gif')){
        let keywords = 'Matthew Mercer';
        if (tokens.length > 1){
            keywords = tokens.slice(1,tokens.length).join(" ");
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=LIVDSRZULELA&contentfilter=off`;
        let response =  await fetch(url);
        let json = await response.json();
        console.log(json);
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }
    if (r === 1){
        msg.channel.send('` F is in the chat boyz `');
    } else if (r === 20){
        msg.channel.send('` NOICE `');
    }
}


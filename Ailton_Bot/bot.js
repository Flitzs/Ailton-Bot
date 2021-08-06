console.log('Beep Bop')

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const msg_e = require('discord.js');
client.login();

client.on('ready', readyDiscord)

function readyDiscord(msg){
    console.log("It's ALIVE!!!");
}

const commandHandler = require("./commands")

client.on('message', commandHandler, Discord); {
	const newEmbed = new Discord.MessageEmbed()
	.setColor(204, 255, 25)
	.setTitle('Rules')
	newEmbed.description
	newEmbed.fields; (
		{name: 'Rule 1', value: 'be noice'},
		{name: 'Rule 2', value: "don't be not noice"},
		{name: 'Rule 3', value: 'die'}
	)
	newEmbed.setThumbnail('/img/AIlton Bot pic.jfif')
}



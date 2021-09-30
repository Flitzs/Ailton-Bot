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

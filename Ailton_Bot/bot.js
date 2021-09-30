console.log('Beep Bop');

const path = require('path');
require('dotenv').config({path:'.env'});

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const msg_e = require('discord.js');
client.login(process.env.TOKEN);    

client.on('ready', readyDiscord)

function readyDiscord(msg){
    console.log("It's ALIVE!!!");
    // console.log(process.env.TOKEN);
}

const commandHandler = require("./commands")

//The commands are not working, it's not reading msg, 
//watch the coding train tutorial again
//after debuging post it

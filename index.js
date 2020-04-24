/*Base*/
const botconfig = require("./botconfig.json");
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Hello', {type: "WATCHING"});
});

client.on('message', async message => {
    if(message.author.client)return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
});

client.login(botconfig.token);
const botconfig = require("./botconfig.json");
const Discord = require('discord.js');

const bot = new Discord.Client({disableEverryone : true});

bot.on("ready", async () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  bot.user.setActivity("Hello", {type: "STREAMING"});
})

bot.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello")
    }
    
})

bot.login(botconfig.token);
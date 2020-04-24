const botconfig = require("./botconfig.json");
const coulours = require("./coulours.json");
const Discord = require('discord.js');

const bot = new Discord.Client({disableEverryone : true});

bot.on("ready", async () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  bot.user.setActivity("Minecraft", {type: "PLAYING"});
})

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.alliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        return console.log("[LOGS] N'as pas trouvé les commandes")
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.alliases.forEach(alias => {
            bot.alliases.set(alias, pull.config.name)
        })
    })
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)){
        return;
    }
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.alliases.get(cmd.slice(prefix.length)))
    if(commandfile) {
        commandfile.run(bot,message,args)
    }

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello")
    }
})

bot.login(botconfig.token);
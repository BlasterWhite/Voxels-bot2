const botconfig = require("./botconfig.json");
const coulours = require("./coulours.json");
const Discord = require('discord.js');

const bot = new Discord.Client({disableEverryone : true});

bot.on("ready", async () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  bot.user.setActivity("Minecraft", {type: "PLAYING"});
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
    if(cmd === `${prefix}serverinfo`){
        let sEmbed = new Discord.MessageEmbed()
        .setColor(coulours.orange)
        .setTitle("Serveur Info")
        .addField("**Guild Name**", `${message.guild.name}`, true)
        .addField("**Guild Owner**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .setFooter('Voxels Bot', bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
    }

})

bot.login(botconfig.token);
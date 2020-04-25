const Discord = require("discord.js")
const coulours = require("../coulours.json")
const botconfig = require("../botconfig.json")

module.exports.run =async (bot, message, args) => {
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

module.exports.config = {
    name: "serveurinfo",
    alliases: ["si", "serverinfo", "servinfo", "serveri"],
    description: "",
    accessableby: "Membres"
}
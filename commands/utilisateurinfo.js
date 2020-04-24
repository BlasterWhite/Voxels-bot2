const Discord = require("discord.js")
const coulours = require("../coulours.json")
const botconfig = require("../botconfig.json")

module.exports.run =async (bot, message, args) => {
    let uEmbed = new Discord.MessageEmbed()
    .setColor(coulours.green)
    .setTitle("Utilisateur Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Nom**", `${message.author.username}`, true)
    .addField("**Numéro**", `${message.author.discriminator}`, true)
    .addField("**ID**", `${message.author.id}`, true)
    .addField("**Status**", `${message.author.presence.status}`, true)
    .addField("**Crée le :**", `${message.author.createdAt}`, true)
    .setFooter('Voxels Bot', bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed});
}

module.exports.config = {
    name: "utilisateurinfo",
    alliases: ["ui", "usernameinfo", "userinfo", "usernamei", "useri"],
    description: "",
    noalias: "No Aliases",
    accessableby: "members"
}
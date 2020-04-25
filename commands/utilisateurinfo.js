const Discord = require("discord.js")
const couleurs = require("../couleurs.json")
const botconfig = require("../botconfig.json")

module.exports.run =async (bot, message, args) => {
    let uEmbed = new Discord.MessageEmbed()
    .setColor(couleurs.green)
    .setTitle("Utilisateur Info")
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(`${message.author.username} Info`, message.guild.iconURL())
    .addField("**Nom**", `${message.author.username}`, true)
    .addField("**Numéro**", `${message.author.discriminator}`, true)
    .addField("**ID**", `${message.author.id}`, true)
    .addField("**Status**", `${message.author.presence.status}`, true)
    .addField("**Crée le :**", `${message.author.createdAt}`, true)
    .setFooter('Voxels Bot', bot.user.displayAvatarURL());
    message.channel.send({embed: uEmbed});
}

module.exports.config = {
    name: "utilisateurinfo",
    alliases: ["ui", "usernameinfo", "userinfo", "usernamei", "useri"],
    description: "",
    noalias: "No Aliases",
    accessableby: "members"
}
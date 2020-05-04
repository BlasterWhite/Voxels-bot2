const Discord = require("discord.js")
const couleurs = require("../../couleurs.json")
const botconfig = require("../../botconfig.json")

module.exports = { 
    config: {
        name: "serveurinfo",
        aliases: ["si", "serverinfo", "servinfo", "serveri"],
        description: "",
        usage: "``!serveurinfo``",
        accessableby: "Membres"
    },    
    run: async (bot, message, args) => {
    let sEmbed = new Discord.MessageEmbed()
    .setColor(couleurs.orange)
    .setTitle("Serveur Info")
    .addField("**Nom du Serveur**", `${message.guild.name}`, true)
    .addField("**Propriétaire du Serveur**", `${message.guild.owner}`, true)
    .addField("**Nombre de Membres:**", `${message.guild.memberCount}`, true)
    .addField("**Nombre de Role:**", `${message.guild.roles.cache.size}`, true)
    .setFooter('Voxels Bot', bot.user.displayAvatarURL());
    message.channel.send({embed: sEmbed});
    }
}
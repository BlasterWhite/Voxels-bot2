const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const couleurs = require("../couleurs.json")

module.exports.run = async (bot, message, args) => {
    message.channel.send("Oui ?");
}

module.exports.config = {
    name: "test",
    alliases: [],
    usage: `${botconfig.prefix}`,
    noalias: "Pas d'Aliases",
    accessableby: "Membre"
}
const Discord = require("discord.js")
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    message.channel.send("Oui ?");
}

module.exports.config = {
    name: "reload",
    alliases: [],
    usage: `${botconfig.prefix}`,
    description: "Mouai Mouai",
    noalias: "Pas d'Aliases",
    accessableby: "Modérateur | Administrateur"
}
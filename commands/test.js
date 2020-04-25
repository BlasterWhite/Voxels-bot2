const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const coulours = require("../coulours.json")

module.exports.run =async (bot, message, args) => {
    message.channel.send("Oui ?");
}

module.exports.config = {
    name: "Test",
    alliases: [],
    description: "Utulisé par le Dev",
    usage: "!test",
    noalias: "No Aliases",
    accessableby: "Members"
}
const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const couleurs = require("../couleurs.json")

module.exports.run =async (bot, message, args) => {
    console.log("Oui ?")
}

module.exports.config = {
    name: "Test",
    alliases: [],
    description: "Utulisé par le Dev",
    usage: "!test",
    noalias: "No Aliases",
    accessableby: "Members"
}
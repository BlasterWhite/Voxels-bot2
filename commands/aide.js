const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const coulours = require("../coulours.json")

module.exports.run =async (bot, message, args) => {
    message.channel.send("Oui ?");
}

module.exports.config = {
    name: "aide",
    alliases: ["help"],
    description: "",
    noalias: "No Aliases",
    accessableby: "members"
}
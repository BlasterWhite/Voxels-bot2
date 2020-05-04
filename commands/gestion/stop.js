const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports = {
    config: {
        name: "stop",
        aliases: [],
        usage: `${botconfig.prefix}`,
        description: "Mouai Mouai",
        noalias: "Pas d'Aliases",
        accessableby: "Modérateur | Administrateur"
    },
    run:async (bot, message, args) => {
        if(message.author.id != "") return message.channel.send("Tu n'as pas le de m'arréter").then;
    }
}
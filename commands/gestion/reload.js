const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports= {
    config: {
        name: "reload",
        aliases: [],
        usage: `${botconfig.prefix}`,
        description: "Mouai Mouai",
        noalias: "Pas d'Aliases",
        accessableby: "Modérateur | Administrateur"
    },
    run: async (bot, message, args) => {
        message.channel.send("Oui ?");
    }
}
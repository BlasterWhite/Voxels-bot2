const botconfig = require("../../botconfig.json")

module.exports = {
    config: {
        name: "test",
        aliases: [],
        usage: `${botconfig.prefix}`,
        noalias: "Pas d'Aliases",
        accessableby: "Membre"
    },
    run: async (bot, message, args) => {
    message.channel.send("Oui ?");
    }
}

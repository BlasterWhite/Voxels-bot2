module.exports = {
    config: {
        name: "test",
        aliases: [],
        usage: ` `,
        noalias: "Pas d'Aliases",
        category: "gestion",
        accessableby: "Modérateur | Administrateur"
    },
    run: async (bot, message, args) => {
    message.channel.send("Oui ?");
    }
}

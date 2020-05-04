const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")

module.exports = {
    config: {
    name: "clear",
    aliases: ["efface"],
    usage: `${botconfig.prefix}efface <nbre msg>`,
    description: "efface le nombre de message demandé",
    accessableby: "Modérateur | Administrateur"
    },
    run: async (bot, message, args) => {
    message.channel.send("En Cours de Developpement")
    // if(!args[0]){
    //     message.delete()
    //     message.channel.send("Merci de mettre le nombre de lignes à supprimées").then(m => m.delete({timeout: 5000}))
    //     return 
    // }
    // message.channel.send(args[0])
    // for(x=0;x<args[0];x++){
    //     message.channel.send(x)
    // }
    }
}
const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const couleurs = require("../../couleurs.json");

module.exports = {
    config: {
        name: "unban",
        aliases: [],
        description: "Debannir une personne",
        usage: "<ID>",
        noalias: "No Aliases",
        category: "moderation",
        accessableby: "Modérateur | Administrateur"
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner) return message.channel.send("Tu n'as pas la permission de faire cette commandes");
        if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Je n'ai pas la permission de unbannir")

        let banni = await bot.users.fetch(args[0])
        if(!banni){
            return message.channel.send("Merci de mentionner une personne")
        }
        let raison = args.slice(1).join(" ");
        if(!raison){
            raison = "Aucune raison donnée"
        }
        
        try {
            message.guild.members.unban(banni, {reason: raison})
            message.channel.send(`🔨 Okay je **Deban** ${banni} pour: ${raison}`)
        }catch(e) {
            
        }
        let embed = new Discord.MessageEmbed()
        .setColor(couleurs.red)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
        .addField("Moderation:", "🔨 Unban")
        .addField("Cible (ID):", `${banni}`)
        .addField("Moderateur:", message.author.username)
        .addField("Raison:", raison)
        .addField("Date:", message.createdAt.toLocaleString())

        let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")
        sChannel.send(embed)
    }
}

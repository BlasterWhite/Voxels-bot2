const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const couleurs = require("../couleurs.json")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner) return message.channel.send("Tu n'as pas la permission de faire cette commandes");
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Je n'ai pas la permission de bannir")

    let banni = message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
    if(!banni){
        return message.channel.send("Merci de mentionner l'heureux élu")
    }
    let raison = args.slice(1).join(" ");
    if(!raison){
        raison = "Aucune raison donnée"
    }
    banni.send(`🔨 Tu as été banni de ${message.guild.nema} pour: ${raison}`).then(() => {
        message.guild.members.ban(banni, { days:1, reason: raison}).catch(err => console.log(err))
    })

    message.channel.send(`🔨 Okay je ban ${banni} pour: ${raison}`).then(m => m.delete({ timeout: 5000 }))

    let embed = new Discord.MessageEmbed()
    .setColor(couleurs.red)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
    .addField("Moderation:", "🔨 Ban")
    .addField("Cible:", `${banni.user.username}#${banni.user.discriminator}`)
    .addField("Moderateur:", message.author.username)
    .addField("Raison:", raison)
    .addField("Date:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")
    sChannel.send(embed)
}

module.exports.config = {
    name: "ban",
    alliases: [],
    description: "Ban une personne",
    usage: `${botconfig.prefix}`,
    noalias: "Pas d'Aliases",
    accessableby: "Membre"
}
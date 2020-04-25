const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const couleurs = require("../couleurs.json")

module.exports.run =async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS") || !message.guild.owner) return message.channel.send("Tu n'as pas la permission de faire cette commandes");
    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Je n'ai pas la permission de mettre des roles")
    
    let kicker = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!kicker) return message.channel.send("Merci de mentinner une personne");
    
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "Aucune raison donnée"
    
    kicker.kick().then(() => {
        message.delete({ timeout: 5000})
        kicker.send(`🔈 Salut, tu as été exclus de ${message.guild.name} pour: ${reason}`).catch(err => console.log(err))
        message.channel.send(`🔈 ${kicker.user.username} a été exclus.`)
    })

    let embed = new Discord.MessageEmbed()
    .setColor(couleurs.red)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Kick 🦶")
    .addField("kicker:", `${kicker.user.username}#${kicker.user.discriminator}`)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
    let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")
    sChannel.send(embed)
}

module.exports.config = {
    name: "kick",
    alliases: ["exclus"],
    description: "Kick une personne",
    usage: "``!kick``",
    accessableby: "Modérateur | Administrateur"
}
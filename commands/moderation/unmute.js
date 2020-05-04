const Discord = require("discord.js")
const { prefix } = require("../../botconfig.json");
const couleurs = require("../../couleurs.json");



module.exports = {
    config: {
        name: "unmute",
        aliases: [],
        description: "Unmute une personne",
        usage: `${prefix}unmute <@pseudo> <raison>`,
        noalias: "No Aliases",
        accessableby: "Modérateur | Administrateur"
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Tu n'as pas la permission de faire cette commandes");
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Je n'ai pas la permission de mettre des roles")

        let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mutee) return message.channel.send("Merci de mentinner une personne");

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "Aucune raison donnée"

        let muterole = message.guild.roles.cache.find(r => r.name === "Mute")
        if(!muterole) return message.channel.send("Il n'y a pas de role _**Mute**_ !")

        mutee.roles.remove(muterole.id).then(() => {
            message.delete({ timeout: 5000})
            mutee.send(`🔊 Salut, tu as été unmuté.e sur ${message.guild.name} pour: ${reason}`).catch(err => console.log(err))
            message.channel.send(`🔊 ${mutee.user.username} a été Demute!`)
        })

        let embed = new Discord.MessageEmbed()
        .setColor(couleurs.red)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
        .addField("Moderation:", "🔊 Unmute")
        .addField("Cible:", `${mutee.user.username}#${mutee.user.discriminator}`)
        .addField("Moderateur:", message.author.username)
        .addField("Raison:", reason)
        .addField("Date:", message.createdAt.toLocaleString())

        let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")
        sChannel.send(embed)
    }
}
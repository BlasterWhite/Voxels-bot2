const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const couleurs = require("../../couleurs.json");



module.exports= {
    config: {
        name: "accepte",
        aliases: ["add", "new", "accept","accepté"],
        description: "Mute une personne",
        usage: "``!accepte <@pseudo>``",
        accessableby: "Modérateur | Administrateur"
    },
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Tu n'as pas la permission de faire cette commandes");
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Je n'ai pas la permission de mettre des roles")

        let newjoueur = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!newjoueur) return message.channel.send("Merci de mentinner une personne");

        newjoueur.roles.add("703675186607554560").then(() => {
            message.delete({ timeout: 5000})
            newjoueur.send(`🆕 Salut, tu as été accepté.e ${message.guild.name} tu as maintenant le role joueur`).catch(err => console.log(err))
            message.channel.send(`🆕 ${newjoueur.user.username} a été accepté.e en tant que joueur.`)
        })

        let embed = new Discord.MessageEmbed()
        .setColor(couleurs.blue)
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
        .addField("Action:", "🆕 Nouveau Joueur")
        .addField("newjoueur:", `${newjoueur.user.username}#${newjoueur.user.discriminator}`)
        .addField("Accepté par:", message.author.username)
        .addField("Date:", message.createdAt.toLocaleString())

        let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")
        sChannel.send(embed)
    }
}
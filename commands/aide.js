const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const couleurs = require("../couleurs.json")
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

    if(args[0] == "aide") {
        return message.channel.send(`Utilisé le prefix ${prefix}aide`)
    }
    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor(couleurs.red)
            .setAuthor(`Voxels Bot Aide`, message.guild.iconURL)
            .setDescription(`Le prefix du bot est :**${prefix}** \n\n **Commande:** ${command.config.name}\n**Description:** ${command.config.description || "Pas de Description Enregistrée"}\n**Utilisation:** ${command.config.usage}\n**Rang**: ${command.config.accessableby || "Membre"}\n**Aliases:** ${command.config.noalias || command.config.alliases}`)
            message.channel.send(SHembed);
        }
    }
    if(!args[0]) {
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Aide`, message.guild.iconURL)
        .setColor(couleurs.red)
        .setDescription(`${message.author.username} Regarde dans tes messages privés .`)

        let Sembed = new Discord.MessageEmbed()
        .setColor(couleurs.light_blue)
        .setAuthor(`Voxels Bot Aide`, message.guild.iconURL())
        .setThumbnail(bot.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(`Ceci sont les commandes possible avec Voxels Bot.\nLe prefix du bot est :**${prefix}** \n`)
        .addField('Commandes:', "``aide`` ``utilisateurinfo`` ``serveurinfo`` ``test`` ``mute`` ``unmute`` ``credit`` ")
        .addField('La commande ``!aide``', "**!aide <nom de la commande>**")
        .setFooter('Voxels Bot', bot.user.displayAvatarURL())
        message.channel.send(embed).then(m => m.delete({ timeout: 5000}));
        message.author.send(Sembed)
    }

}

module.exports.config = {
    name: "aide",
    alliases: ["help"],
    description: "Dans les utilité de toutes les commandes.",
    usage: "``!aide <nom de la commande>``",
    accessableby: "Membres"
}
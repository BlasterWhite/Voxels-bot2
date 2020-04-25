const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const coulours = require("../coulours.json")
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
            .setColor(coulours.red)
            .setAuthor(`Voxels Bot Aide`, message.guild.iconURL)
            .setDescription(`Le prefix du bot est :**${prefix}** \n\n **Commande:** ${command.config.name}\n**Description:** ${command.config.description || "Pas de Description Enregistrée"}\n**Utilisation:** ${command.config.usage}\n**Rang**: ${command.config.accessableby || "Membre"}\n**Aliases:** ${command.config.noalias || command.config.alliases}`)
            message.channel.send(SHembed);
        }
    }
    if(!args[0]) {
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Aide`, message.guild.iconURL)
        .setColor(coulours.red)
        .setDescription(`${message.author.username} Regarde dans tes messages privés .`)

        let Sembed = new Discord.MessageEmbed()
        .setColor(coulours.light_blue)
        .setAuthor(`Voxels Bot Aide`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Ceci sont les commandes possible avec Voxels Bot.\nLe prefix du bot est :**${prefix}** \n`)
        .addField('Commandes:', "``aide`` ``utilisateurinfo`` ``serveurinfo`` ``test``")
        .setFooter('Voxels Bot', bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }

}

module.exports.config = {
    name: "aide",
    alliases: ["help"],
    description: "",
    noalias: "No Aliases",
    accessableby: "members"
}
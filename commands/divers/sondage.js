const Discord = require("discord.js")
const botconfig = require("../../botconfig.json")
const couleurs = require("../../couleurs.json")

module.exports = {
    config: {
        name: "sondage",
        aliases: ["sond"],
        description: "",
        usage: `<Question>`,
        category: "divers",
        accessableby: "Membre"
    },    
    run: async (bot, message, args) => {
        var sond = args.slice(0).join(' ');

        let embed = new Discord.MessageEmbed()
        .setColor(couleurs.orange)
        .setTitle("📋 Sondage")
        .addField("Question:", `**${sond}**`)
        .setFooter(`Voxels Bot | Sondage par ${message.author.username}`, bot.user.displayAvatarURL());
        message.channel.send({ embed: embed }).then(messageReaction => {
            messageReaction.react('✅').then(() =>
            messageReaction.react('❎'))
            message.delete({ timeout:5000 })
        })
    }
}

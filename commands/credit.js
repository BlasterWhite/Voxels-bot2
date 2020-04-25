const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const couleurs = require("../couleurs.json")

module.exports.run =async (bot, message, args) => {
    let cEmbed = new Discord.MessageEmbed()
    .setColor(couleurs.orange)
    .setTitle("Crédit du Voxels Bot")
    .addField("**Developpeurs**", `BlasterWhite\n`)
    .addField("Inspiré par :", `Série Discord Bot | par MenuDocs` )
    .setFooter('Voxels Bot', bot.user.displayAvatarURL);
    message.channel.send({embed: cEmbed});
}

module.exports.config = {
    name: "credit",
    alliases: ["crédit"],
    description: "Donne tous les crédit de Voxels Bot",
    usage: "``!credit``",
    accessableby: "Membres"
}
const Discord = require("discord.js")

module.exports = bot => {
    console.log(`Logged in as ${bot.user.tag}!`)
    bot.user.setActivity("Minecraft", {type: "PLAYING"});
}
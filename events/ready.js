const Discord = require("discord.js")

module.exports = bot => {
    console.log(`Connecte sur ${bot.user.tag}!`)

    let statuses = [`Minecraft`, `!aide`, `Voxels.fr`, `Derière toi`,]
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 60000)
}
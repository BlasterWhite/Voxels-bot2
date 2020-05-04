const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../botconfig.json");
const { readdirSync } = require("fs")
const { stripIndents } = require("common-tags")
const { green } = require("../../couleurs.json")

module.exports = {
    config: {
        name: "aide",
        aliases: ["h", "help", "commandes"],
        usage: "<commande>",        
        description: `Montre toutes les commandes posiible avec moi`,
        category: "divers",
        accessableby: "Membres"
    },
    run: async (bot, message, args) => {
        const embed = new MessageEmbed()
            .setColor(green)
            .setAuthor(`${message.guild.me.displayName} Aide`, message.guild.iconURL())
            .setThumbnail(bot.user.displayAvatarURL())

        if(!args[0]) {
            const categories = readdirSync("./commands/")

            embed.setDescription(`Ceci sont les commandes que je peux faire ${message.guild.me.displayName}\nThe bot prefix is: **${prefix}** \n Si tu veut plus d'info sur une commande fait **${prefix}aide** suivi du nom de la commande`)
            embed.setFooter(`${message.guild.me.displayName} | Nombres de commandes: ${bot.commands.size}`, bot.user.displayAvatarURL());

            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.config.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" ") || "BUG")
                } catch(e) {
                    console.log(e)
                }
            })

            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
            command = command.config

            embed.setDescription(stripIndents`The bot's prefix is: \`${prefix}\`\n
            **Commande:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Description:** ${command.description || "No Description provided."}
            **Utilisation:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}
            **Accessibilite:** ${command.accessableby || "Members"}
            **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None."}`)

            return message.channel.send(embed)
        }
    }
}
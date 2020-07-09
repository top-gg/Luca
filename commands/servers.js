const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let image = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(client.guilds.cache.size)
    message.channel.send(embed).catch(console.error);
}
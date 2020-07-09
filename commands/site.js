const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("[Site](https://burbca.animalbot.xyz)")
    message.channel.send(embed).catch(console.error);
}
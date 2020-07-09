const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#f0ad9c")
    .setDescription("Please watch the following video. Replace any instances of twitter with discord. [https://www.youtube.com/watch?v=umxmHpUPS5A](https://www.youtube.com/watch?v=umxmHpUPS5A)")
    message.channel.send(embed).catch(console.error);
}
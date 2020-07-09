const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let image = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage("https://api.alexflipnote.dev/filter/invert?image=" + image.displayAvatarURL({dynamic: false, format:"png", size:4096}))
    message.channel.send(embed).catch(console.error);
}
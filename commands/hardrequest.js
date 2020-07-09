//You seem to have asked for a very specific bot/feature. You likely won't find it on the site if you haven't searched already. You can try and put a request on Fiverr or Freelancer.
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#f0ad9c")
    .setDescription("You seem to have asked for a very specific bot/feature. You likely won't find it on the site if you haven't searched already. You can try and put a request on Fiverr or Freelancer.")
    message.channel.send(embed).catch(console.error);
}
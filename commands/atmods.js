
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Please do not mention (ping) more than one or two moderators for help, unless there is an emergency. \nHere are some examples of emergencies: \n-Raids / Multiple members mass spamming.\n - Severe disruption of Discord's ToS (NSFW content, etc) \n- Anything that requires more than 2 moderators to handle.")
    message.channel.send(embed).catch(console.error);
}
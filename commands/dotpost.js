//Please do not post dots to clear your messages/get attention. It adds absolutely nothing to the conversation and just causes spam.
//If you need to get attention, then say hello everyone. If you need to clear your messages, then press the Esc key. If you do not follow these instructions you will be muted.
const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#f0ad9c")
    .setDescription("Please do not post dots to clear your messages/get attention. It adds absolutely nothing to the conversation and just causes spam.\nIf you need to get attention, then say `hello everyone`. If you need to clear your messages, then press the `Esc` key. If you do not follow these instructions you will be muted.")
    message.channel.send(embed).catch(console.error);
}
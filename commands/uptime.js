const Discord = require("discord.js")
exports.run = async(client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const UptimeEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Stats module')
    .setAuthor('Time without an incident')
    .setDescription(`${days}day(s) ${hours}hour(s) ${minutes}minute(s) and ${seconds}second(s)`)
    return message.channel.send(UptimeEmbed)
}
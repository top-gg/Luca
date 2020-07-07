const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Pong! I am alive")
    .addFields(
        {name:"Websocket ping", value:client.ws.ping + "ms"},
        {name:"Message ping", value:Date.now - message.createdAt}
    )
    message.channel.send().catch(console.error);
}
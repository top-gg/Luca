const Discord = require("discord.js");
exports.run = (client, message, args) => {
var date = new Date()
    const embed = new Discord.MessageEmbed()
    .setTitle("Pong! I am alive")
    .addFields(
        {name:"Websocket ping", value:client.ws.ping + "ms"}
    )
    message.channel.send(embed).catch(console.error);
}
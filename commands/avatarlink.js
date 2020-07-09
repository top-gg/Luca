const Discord = require("discord.js");
exports.run = (client, message, args) => {
let image = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
message.channel.send(image.avatarURL({dynamic: true}))
}
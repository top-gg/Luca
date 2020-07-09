const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#f0ad9c")
    .setDescription("While I can't say what you are doing isn't allowed as per our rules. I can say that it is most likely not welcome and won't really be something that people enjoy, and it wont make you look better in the eyes of the people around you. In fact in most cases it worsens the opinion of you by continuing this behavior. If people are telling you directly to stop this behavior, maybe they have some merit.")
    message.channel.send(embed).catch(console.error);
}
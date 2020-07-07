module.exports = (client, member) => {
    const defaultChannel = member.guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES") && channel.name === "welcome");
    defaultChannel.send(`Welcome ${member.user.tag} to this server.`).catch(console.error);
}
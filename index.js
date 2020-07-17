const Discord = require('discord.js');
const Enmap = require("enmap")
const fs = require("fs")
const client = new Discord.Client();
const config = require("./config.json")
client.config = config;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('with my commands | b!help')
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.on('guildCreate', async (guild) => {
  // v11
  //const channel = client.channels.get(id); get v12 pleb
  // v12
  const channel = client.channels.cache.get('717433736806924338');

  // finally
  if (!channel) return;
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const Embed = new Discord.MessageEmbed()
  .setColor('#' + randomColor)
  .setAuthor('Guild Join Listener')
  .addFields(
    {name: 'Guild Name', value:guild.name},
    {name: 'Guild ID', value:guild.id},
    {name: 'Guild Owner', value:guild.ownerID},
    {name: 'Member Count', value:guild.memberCount}
  )
  .setFooter('Burbca has joined a new server >V<')
  channel.send(Embed)//(`Joined ${guild.name}`);
});
client.on('guildDelete', (guild) => {
  // v11
  //const channel = client.channels.get(id); get v12 pleb

  // v12
  const channel = client.channels.cache.get('717433736806924338');

  // finally
  if (!channel) return;
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  const Embed = new Discord.MessageEmbed()
  .setColor('#' + randomColor)
  .setAuthor('Guild Kick Listener')
  .addFields(
    {name: 'Guild Name', value:guild.name},
    {name: 'Guild ID', value:guild.id},
    {name: 'Guild Owner', value:guild.ownerID},
    {name: 'Member Count', value:guild.memberCount}
  )
  .setFooter('Burbca has been kicked from a server >ʌ<')
  channel.send(Embed)//(`Joined ${guild.name}`);
});

client.login(client.config.token);
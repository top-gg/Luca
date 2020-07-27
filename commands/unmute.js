const Discord = require("discord.js")
exports.run = async(client, message, args) => {
    const a = args.join(" ")
    const b = a.split("|")
    if(!message.guild.me.hasPermission("MANAGE_ROLES") || !message.guild.me.hasPermission("MANAGE_CHANNELS"))return
  let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tounmute){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | Couldn't find that user.")
      return message.channel.send(embed)
    }
  if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("KICK_MEMBERS")){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | You do not have a moderation role, these are classified by having `BAN` and `KICK` permissions")
      return message.channel.send(embed)
  }
if(!b[1]){
  embed = new Discord.MessageEmbed()
  .setDescription("<:tickno:730766875822260254> | You didn't provide a reason, correct usage is `-unmute (userID / mention) | (reason)`")
  return message.channel.send(embed)
}
  
  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "muted");

try{
  await tounmute.roles.remove(muterole)
  embed = new Discord.MessageEmbed()
  .setDescription(`<:tickyes:730766875470069821> | Member **${tounmute.displayName}** successfully unmuted for **${b[1]}**`)
  message.channel.send(embed)
  try{
    const modlogembed = new Discord.MessageEmbed()
    .setTitle("Unmute")
    .setColor("#11fa05")
    .addFields(
        {name:"**User**", value:tounmute.user, inline:true},
        {name:"**Moderator**", value:message.author.tag, inline:true},
        {name:"**Reason**", value:b[1]}
    )
    .setTimestamp()
   const log = await message.guild.channels.cache.find(ch => ch.name === 'mod-log')
   if(!log)return
   log.send(modlogembed);
  }catch(e){
      message.channel.send(`Error, Possibly I don't have permissions? \nHere it is \`\`\`${e.stack}\`\`\``)
  }
}catch(err){
      message.channel.send(`Error, Possibly I don't have permissions \nHere it is \`\`\`${e.stack}\`\`\``)
  }
}
const Discord = require("discord.js")
exports.run = async(client, message, args) => {
const a = args.join(" ")
const b = a.split("|")
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!message.guild.me.hasPermission("MANAGE_ROLES") || !message.guild.me.hasPermission("MANAGE_CHANNELS"))return
  if(!tomute){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | Couldn't find that user.")
      return message.channel.send(embed)
    }
  if(message.member.roles.highest.comparePositionTo(tomute.roles.highest) <= 0){
    embed = new Discord.MessageEmbed()
    .setDescription("<:tickno:730766875822260254> | You cannot mute this person, they have a higher role than you, or the same role as you")
    return message.channel.send(embed)
    }
  if(tomute.hasPermission("MANAGE_MESSAGES")){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | You cannot mute this person, they have `MANAGE_MESSAGES`")
      return message.channel.send(embed)
    }
  if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("KICK_MEMBERS")){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | You do not have a moderation role, these are classified by having `BAN` and `KICK` permissions")
      return message.channel.send(embed)
  }if(!b[1]){
    embed = new Discord.MessageEmbed()
    .setDescription("<:tickno:730766875822260254> | You did not provide a reason, correct usage is `-mute (userID / mention)` | (reason)")
    return message.channel.send(embed)
  }
  
  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
          data: {
        name: "muted",
        color: "#000000",
        permissions:[]
      },
      reason:"mute setup"
    })
      message.guild.channels.cache.forEach(channel => {
        channel.updateOverwrite(muterole.id, { SEND_MESSAGES: false, ADD_REACTIONS: false });

    });
}catch(e){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | I don't have the permission `MANAGE_ROLES` or `MANAGE_CHANNELS`")
      return message.channel.send(embed)
    }
  }else{
      try{
        tomute.roles.add(muterole)
      }catch(e){
          embed = new Discord.MessageEmbed()
          .setDescription("<:tickno:730766875822260254> | I don't have permission `MANAGE_ROLES`")
          return message.channel.send(embed)
      }
  }

try{
  await tomute.roles.add(muterole)
  embed = new Discord.MessageEmbed()
  .setDescription(`<:tickyes:730766875470069821> | Member **${tomute.displayName}** successfully muted for **${b[1]}**`)
  message.channel.send(embed)
 try{
  const modlogembed = new Discord.MessageEmbed()
  .setTitle("Mute")
  .setColor("#FFFF00")
  .addFields(
      {name:"**User**", value:tomute.user, inline:true},
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
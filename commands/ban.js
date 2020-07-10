const Discord = require("discord.js")
exports.run = async(client, message, args) => {
const a = args.join(" ")
const b = a.split("|")
  let toban = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!message.guild.me.hasPermission("BAN_MEMBERS"))return
  if(!toban){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | Couldn't find that user.")
      return message.channel.send(embed)
    }
  if(message.member.roles.highest.comparePositionTo(toban.roles.highest) <= 0){
    embed = new Discord.MessageEmbed()
    .setDescription("<:tickno:730766875822260254> | You cannot ban this person, they have a higher role than you, or the same role as you")
    return message.channel.send(embed)
    }
    if(toban.bannable === false){
        embed = new Discord.MessageEmbed()
        .setDescription("<:tickno:730766875822260254> | I cannot ban this person, they have a higher or the same role as me")
        return message.channel.send(embed)
        }
  if(!message.member.hasPermission("BAN_MEMBERS") && !message.member.hasPermission("KICK_MEMBERS")){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | You do not have a moderation role, these are classified by having `BAN` and `KICK` permissions")
      message.channel.send(embed)
  }if(!b[1]){
    embed = new Discord.MessageEmbed()
    .setDescription("<:tickno:730766875822260254> | You did not provide a reason, correct usage is `-ban (userID / mention)` | (reason)")
  }else{
    try{
        await toban.ban({reason: b[1]})
        embed = new Discord.MessageEmbed()
        .setDescription(`<:tickyes:730766875470069821> | Member **${toban.displayName}** successfully banned`)
        message.channel.send(embed)
       try{
        const modlogembed = new Discord.MessageEmbed()
        .setTitle("BAN")
        .setColor("#d10000")
        .addFields(
            {name:"**User**", value:toban.user.tag, inline:true},
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
  }

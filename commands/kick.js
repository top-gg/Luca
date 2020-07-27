const Discord = require("discord.js")
exports.run = async(client, message, args) => {
const a = args.join(" ")
const b = a.split("|")
if(!message.guild.me.hasPermission("KICK_MEMBERS"))return
  let tokick = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tokick){
      embed = new Discord.MessageEmbed()
      .setDescription("<:tickno:730766875822260254> | Couldn't find that user.")
      return message.channel.send(embed)
    }
  if(message.member.roles.highest.comparePositionTo(tokick.roles.highest) <= 0){
    embed = new Discord.MessageEmbed()
    .setDescription("<:tickno:730766875822260254> | You cannot kick this person, they have a higher role than you, or the same role as you")
    return message.channel.send(embed)
    }
    if(tokick.kickable === false){
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
    .setDescription("<:tickno:730766875822260254> | You did not provide a reason, correct usage is `-kick (userID / mention)` | (reason)")
    message.channel.send(embed)
  }else{
    try{
        await tokick.kick({reason: b[1]})
        embed = new Discord.MessageEmbed()
        .setDescription(`<:tickyes:730766875470069821> | Member **${tokick.displayName}** successfully kicked for **${b[1]}**`)
        message.channel.send(embed)
       try{
        const modlogembed = new Discord.MessageEmbed()
        .setTitle("Kick")
        .setColor("#d10000")
        .addFields(
            {name:"**User**", value:tokick.user, inline:true},
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
        message.channel.send(`Error, Possibly I don't have permissions \nHere it is \`\`\`${err.stack}\`\`\``)
    }
      }
  }

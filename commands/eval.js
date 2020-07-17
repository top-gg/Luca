const Discord = require("discord.js");
const config = require("../config.json")
function clean(text) {
  if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

exports.run = (client, message, args) => {
  if (message.author.id !== config.ownerID) return message.channel.send('You\'re not my owner, ew, I\'m not allowed to run stranger\'s code.');
  args = args.join(" ");
  b = args.split("/|/")
  try {
    if(args === "client.token" || args === "client.config.token"){
      const tokenEmbed = new Discord.MessageEmbed()
          .setTitle("Success")
          .addFields(
            {name:":inbox_tray:INPUT:inbox_tray:", value:"```" + args + "```" },                                              
            {name:" :outbox_tray:OUTPUT:outbox_tray:",value:'```NzUxMjMzMzY3NzUyMzM1MzQ3.SSf8xw.1rOq3ET7DGmdLcrOKpoxwEAem1M```'}
          )
          .setColor("ORANGE")
     return message.channel.send(tokenEmbed);
    }
      var evaled = eval(b[0]);
      if (typeof evaled !== 'string')
          evaled = require('util').inspect(evaled);
          const evalEmbed = new Discord.MessageEmbed()
          .setTitle("Success")
          .addFields(
            {name:":inbox_tray:INPUT:inbox_tray:", value:"```" + b + "```" },
            {name:":outbox_tray:OUTPUT:outbox_tray:",value:`\`\`\`xl\n${clean(evaled)}\n\`\`\``}
          )
          .setColor("GREEN")
	if(!b[1]){
      return message.channel.send(evalEmbed);
}else if(b[1] === "noembed"){
return message.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
}
  } catch (err) {
    const errEmbed = new Discord.MessageEmbed()
    .setTitle("Error")
    .addFields(
      {name:":inbox_tray:INPUT:inbox_tray:", value:"```" + b + "```" },
      {name:":outbox_tray:ERROR:outbox_tray:",value:`\`\`\`xl\n${clean(err)}\n\`\`\``}
    )
    .setColor("RED")
	if(!b[1]){
      message.channel.send(errEmbed);
}else if(b[1] === "noembed"){
return message.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``)
}
  }
}
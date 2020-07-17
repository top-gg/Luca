const process = require('process')
const os = require('os')
const Discord = require("discord.js")
exports.run = async(client, message, args) => {
    const RAMEmbed = new Discord.MessageEmbed() //creates the embed
    .setColor('RANDOM') //various settings (including using the randColour)
    .setTitle('Stats module')// title
    .addFields(
        {name: 'Memory Usage', value: `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB`, inline:true},
        {name: 'Free memory', value:`${(os.freemem() / 1024 / 1024).toFixed(2)}MB`,inline:true},
        {name: 'System memory', value:`${(Math.ceil(os.totalmem() / 1024 / 1024 / 1024))}GB`,inline:true},
    )
    return message.channel.send(RAMEmbed)
}
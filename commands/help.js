const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if(args[0] === "moderation"){
        embed = new Discord.MessageEmbed()
        .setAuthor("Moderation module")
        .setColor("RANDOM")
        .addFields(
            {name:"-ban (mention or userID) | (reason)",value:"Bans the mentioned member for the reason after the `|`"},
            {name:"-kick (mention or userID) | (reason)",value:"Kicks a mentioned member for the reason after the `|`"},
            {name:"-mute (mention or userID) | (reason)",value:"Mutes the mentioned member for the reason after the `|`"},
            {name:"-unmute (mention or userID) | (reason)",value:"Unmutes the mentioned member for the reason after the `|`"}
        )
        message.channel.send(embed)
    }else if(args[0] === "luca"){
        embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Luca commands")
        .addFields(
            {name:"-politelystop", value:"Tells people to politely stop"},
            {name:"-hardrequest",value:"For telling people that what they have requested, is stupidly rare, or nonexistant"},
            {name:"-atmods",value:"Someone just pinged the entire mod team? Tell them with this!"},
            {name:"-checkdms",value:"Someone saying check DMs when they can just send it into a channel? This command is for you"},
            {name:"-dotpost",value:"The famous dotpost, people creating spam with dotposts? Then this command is just for you"},
        )
        message.channel.send(embed)
    }else if(args[0] === "stats"){
        embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Stats commands")
        .addFields(
            {name:"-ping",value:"Classic ping command, contains websocket ping"},
            {name:"-uptime",value:"Standard uptime command, pretty simple"},
            {name:"-ram", value:"RAM statistics of the bot (used and total)"}
        )
            message.channel.send(embed)
    }else if(args[0] === "images"){
        embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Image commands")
        .addFields(
            {name:"-invert <optional mention/id>",value:"Inverts the avatar of that person"},
            {name:"-amiajoke <optional mention/id>",value:"Am I a joke to you? Try it!"},
            {name:"-bad <optional mention/id>", value:"I can't explain this one, just try all of these, and see"},
            {name:"-magik <optional mention/id>",value:"Distorts their avatar to hell, it's great"},
            {name:"-gay <optional mention/id>",value:"Gayifies their profile picture"},
            {name:"-communist <optional mention/id>",value:"Communistifies their profile picture"},
            {name:"-avatarlink <optional mention/id>",value:"Gives you a discord avatar URL"}
        )
        message.channel.send(embed)
    }else{
        embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Help command")
        .addFields(
            {name:"-help",value:"Help menu | Valid args = `images`, `stats`, `luca` and `moderation`"},
            {name:"-privacypolicy",value:"Leads you to our privacy policy"},
            {name:"-site",value:"Leads you to our website"}
            )
        message.channel.send(embed)
    }
}
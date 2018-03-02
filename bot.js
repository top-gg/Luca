/**
 * Luca - The best bot you'll need for managing and informing members of the server
 * © Discord Bot List 2k18
 *
 * This bot contains all the features you'd ever want from a Discord bot and it's fully open source and free!!
 * Clone and host it yourself and add it to discordbots.org or just invite the bot to your server because I am hosting this in Heroku 24/7!
 * https://discordbots.org/bot/264811613708746752
 */
let Discord = require("discord.js");
var client = new Discord.Client();
if (process) {
    process.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.H3hC6Q.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
} else {
    window.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.H3hC6Q.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', function(message) {
    if (message.content === 'ping' || message.content === '!ping') return message.reply('Pong!');
    if (message.content === 'hi') return message.reply('Hello!');
    if (message.content === 'sa') return message.reply('Aleyküm selam.');

    if (message.content === '!help')  return message.author.send('Commands: `!help`, `!about`, `!thonk`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`, `!randomcat`');
    if (message.content.startsWith('!8ball')) {
        const replies = ["It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes, definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ];
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
        return message.reply(replies[message.replytext]);
    };
    if (message.content === '!roll') return message.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
    if (message.content.startsWith('!')) return message.reply('Unknown command!');
    if (message.content === '!thonk') {
        Discord.users.forEach(g => {
            g.send("thonk")
        });
    };
    if (msg.content === '!about') return message.reply('This is the best bot on planet. Pls upvote');
    const randomNumber = Math.random();
    if (randomNumber < 0.05) {
        return message.reply(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
    };
    if (message.content.startsWith('!eval ')) {
        const script = message.content.substring('!eval '.length);
        const result = eval(script);
        return message.reply(result.toString());
    };
    if (message.content.startsWith('!say ')) {
        return message.reply(message.content.substring('!say '.length));
    };
    if (message.content.startsWith('!say ')) {
        return message.reply(message.content.substring('!say '.length));
    };
    if (message.content.startsWith('!randomcat') && true) {
        const randomcat = 'https://i.imgur.com/jjqKt7t.gifv';
        return message.reply(`here is ur random cat ${randomcat}`)
    };
    return randomcat;
    return 'hi';
});


Discord.login(process ? process.token : window.token);

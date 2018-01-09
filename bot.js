/**
 * Luca - The best bot you'll need for managing and informing members of the server
 * © Discord Bot List 2k17
 * 
 * This bot contains all the features you'd ever want from a Discord bot and it's fully open source and free!!
 * Clone and host it yourself and add it to discordbots.org or just invite the bot to your server because I am hosting this in Heroku 24/7!
 * https://discordbots.org/bot/264811613708746752
 */

let bot = require("discord.js");
var Discord = new bot.Client();
if (process) {
	process.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.H3hC6Q.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
} else {
	window.token = 'MjY0ODExNjEzNzA4NzQ2NzUy.H3hC6Q.dGhpc2lzYWZha2VfdDBrM251bnViLi4u';
}

Discord.on('ready', () => {
  console.log(`Logged in as ${Discord.user.tag}!`);
});

Discord.on('message', function (message) {
  if (message.content === 'ping' || message.content === '!ping') {
    return message.reply('Pong!');
  }
});

Discord.on('message', function (message) {
	if (message.content === 'hi') {
		return message.reply('Hello!');
	  }
  });
  
  Discord.on('message', function (message) {
	if (message.content === 'sa') {
		return message.reply('Aleyküm selam.');
	  }
  });
  		Discord.on('message', function (message) {
			if (message.content === '!help') {
				return message.author.send('Commands: `!help`, `!ping`, `!8ball`, `!roll`');
			  }
  });
  
  Discord.on('message', function (message) {
	if (msg.content.startsWith('!8ball')) {
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
		"Very doubtful"];
		message.replytext = Math.floor((Math.random() * replies.length) + 0);
		return message.reply(replies[message.replytext]);
	  }
});

Discord.on('message', function (message) {
	if (message.content === '!roll') {
		return message.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
	  }
});

Discord.on('message', function (message) {
	if (message.content.startsWith('!')) {
		return message.reply('Unknown command!');
          } 
});

Discord.on('message', function (message) {
	const randomNumber = Math.random();
    if (randomNumber < 0.05) {
		return message.reply(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
    }
});

Discord.on('message', function(message) {
	if (message.content.startsWith('!eval ')) {
		const script = message.content.substring('!eval '.length);
		const result = eval(script);
		return message.reply(result.toString());
	}
});


Discord.login(process ? process.token : window.token);

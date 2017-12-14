/**
 * Luca - The best bot you'll need for managing and informing members of the server
 * © Discord Bot List 2k17
 * 
 * This bot contains all the features you'd ever want from a Discord bot and it's fully open source and free!!
 * Clone and host it yourself and add it to discordbots.org or just invite the bot to your server because I am hosting this in Heroku 24/7!
 * https://discordbots.org/bot/264811613708746752
 */

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping' || msg.content === '!ping') {
    msg.reply('Pong!');
  } else if (msg.content === 'hi') {
    msg.reply('Hello!');
  } else if (msg.content === 'sa') {
    msg.reply('Aleyküm selam.');
  } else if (msg.content === '!help') {
    msg.author.send('Commands: `!help`, `!ping`, `!8ball`, `!roll`');
  } else if (msg.content.startsWith('!8ball')) {
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
    const result = Math.floor((Math.random() * replies.length) + 0);
    msg.reply(replies[result]);
  } else if (msg.content === '!roll') {
    msg.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
  } else if (msg.content.startsWith('!')) {
    msg.reply('Unknown command!');
  } else {
    const randomNumber = Math.random();
    if (randomNumber < 1/10) {
      msg.reply(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
    }
  }
});

client.login('MjY0ODExNjEzNzA4NzQ2NzUy.H3hC6Q.dGhpc2lzYWZha2VfdDBrM251bnViLi4u');
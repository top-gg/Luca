/**
 * Luca - The best bot you'll need for managing and informing members of the server
 * © Top.gg 2016-2022
 *
 * This bot contains all the features you'd ever want from a Discord bot and it's fully open source and free!!
 * Clone and host it yourself and add it to top.gg or just invite the bot to your server because I am hosting this in Heroku 24/7! (W)
 * https://top.gg/bot/264811613708746752
 */

 const { Client, GatewayIntentBits } = require('discord.js');

 const client = new Client({
    intents: [
       GatewayIntentBits.Guilds,
       GatewayIntentBits.GuildMessages,
       GatewayIntentBits.MessageContent,
       GatewayIntentBits.GuildMembers,
    ],
 });
const request = require("node-fetch");



/* eVeRyThInG fRoM tHiS cOrD */
client.on('ready', () => {
  	console.log(`Logged in as ${client.user.tag}!`);
});


//client.on(	'guildMemberAdd'	, function		(member) {
//		for (var i = 0; i < 10; i++) {
//												member
//					.client
//			.guilds
//													.get(member.guild.id)
//					.members
//									.get(member.id)
//							
//		.send('Welcome in ' + member.guild.name + '!');
//}
//});
//unused

client.on('messageCreate', message =>{
  if (message.content === 'ping' || message.content === '!ping') {
     message.channel.send('Pong!');
  	}
});

//Discord.on('message', function (message) {
//	if (message.content === '@everyone') {
//	    return message.channel.send('@everyone ping ping @everyone')
//	}
//});
// unused

client.on('messageCreate', message =>{
	if (message.content === 'hi') {
		 message.channel.send('Hello!');
	  }
  });


client.on('messageCreate', message =>{
	if (message.content === 'sa') {
		 message.channel.send("sa yardim");
	  }
  });

  client.on('messageCreate', message =>{
			if (message.content === '!help') {
				 message.channel.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!roll`, `!eval`, `!say`, `!randomcat`');
			  }
  });

//i dont wan't to redo the 8ball not sorry

client.on('messageCreate', message =>{
	if (message.content.split('').join('') === '!roll') {
		 message.channel.send(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
	  }
});

//client.on('messageCreate', message =>{
//	if (message.content.startsWith('!')) 		{
//		 message.channel.send('Unknown command!');
//         }
//});
// bot won't respond at all


//client.on('messageCreate', message =>{
//	
//	if (message.content === '!thonk') {
//		
//		Discord.users.forEach(g => {
//			
//			g.send("thonk")
//			
//		})
//
//	  }
//	
//});
//dm spamming, against T&S I believe.



client.on('messageCreate', message =>{
    if (message.content === '!about') {
       message.channel.send('This is the best bot on planet. Pls upvote on Top.gg');
    }
});

//client.on('messageCreate', message =>{
//	const randomNumber = Math.random();
//   if (randomNumber < 0.05) {
//		return message.channel.send(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
//   }
//});
// no level system lmao

//client.on('messageCreate', message =>{
//	if (message.content.startsWith('!eval')) {
//		const script = message.content.substring('!eval '.length); //i dont care if this doesn't work
//	const result = eval(script);
//			 message.channel.send(result.toString());
//	}
//});
//works, but dangerous

client.on('messageCreate', message =>{
	if (message.content.startsWith('!say ')) {
		 message.channel.send(message.content.substring('!say '.length));
	}
})

client.on('messageCreate', message =>{
		if (message.content.startsWith('!randomcat')){
 const randomcat = 'https://i.imgur.com/jjqKt7t.gifv';
    message.channel.send(`here is ur random cat ${randomcat}`)
   }
})


client.on('messageCreate', message =>{
	if (message.content.includes('fuck')) {
		 message.channel.send('nO swearing!!111!1') //ironic
	}
})


client.on('messageCreate', message => {
  if (message.content.includes("discord.gg/")) {
    message.delete()
    message.channel.send("No inVites!!!! YOu'll get banned SOOOOOOOOON!!!!!!!")
  }
}
)

// the fuck was the old big ass code ^^^




//client.on('GuildMemberAdd', async message =>{            {
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')                                       ;
//  if (aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.content.includes('!avatar'))                         {
//        aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.reply('https://www.youtube.com/watch?v=3-rfBsWmo0M');
//                                                                                                                            }
//                                                                                                                            }
//)
// fuck this man
                                                                                                                          
client.on('messageCreate', message =>{
  if (message.content.startsWith('!avatar')){
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  message.channel.send(`https://www.youtube.com/watch?v=3-rfBsWmo0M`)
 }
})

//Discord.on('message', message => {
//	// This will fix a bug caused by the !8ball command causing a black hole in a random place in Discord	
//})
//not needed?


client.on('messageCreate', message =>{
    if (message.content === '!oliy') {
       message.channel.send('Oliy is fat'); //fr
    }
});

client.on('messageCreate', message =>{
    if (message.content === '!mods') {
         message.channel.send('Weebs'); //also fr
    }
});

//const d = Discord
//const ascii = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, '\n', 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, '\n', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, '\n', 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, '\n', 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '\n', 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, '\n', 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, '\n', 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, '\n', 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, '\n', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, '\n', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, '\n', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, '\n', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, '\n', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '\n', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '\n', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '\n', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '\n', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].join('').replace('5', '&').replace('4', '#').replace('3', '%').replace('1', ')').replace('0', '@')
/* eslint-disable */
/************************************************************************/
//d.on('message'                                                 , m => {if( 
//m.content==                                                     '-lucaart')
//{m.channel       .send(ascii).then                                (m => {  
//m.author         .send(ascii).catch                                (e => { 
//console          .log(ascii); m.                                   channel 
//.send(          `${ascii}                                           ${ascii}`
//)                }).finally                                             (_=>
//             { console.log                                                (
//`           ${ascii}\nluca big                                            `
//            )})}); } else if   ( m.                                   content
//           === '-dblsbestboy') { m.                                   channel  
//          .send(ascii).catch(e =>                                  {console
//         .log(ascii);})}  else if                                   (m.content
//         === '-child') {m.channel                               .send(ascii
//             .catch(_ => { console.                             log(ascii,ascii
//                    )}))} else if                               (m.content 
//                      ==='-ascii'                               ){m.channel
//                                                                  .send(ascii
//                                                                  + ascii)
//                                                                      .then
//(_                                                                      =>{
//console.log(ascii)}                                                        )
//.catch(_ =>{console                                                        
//.log(ascii, ascii);
//console.log('command run') })}})                      
//I AIN'T DOING THIS SHIT, FUCK YOU WHOEVER MADE THIS (also nice luca ascii)                                                                               
/************************************************************************ */

if (process) {
 process.token = 'x';
} else {
  window.token = 'z';
}

client.login(process ? process.token : window.token);

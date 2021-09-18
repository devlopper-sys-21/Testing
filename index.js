//Variables and Dependencies
console.clear();

const config = require("./config.json");

const Client = require("./structures/Client.js");

//const intents = new Discord.Intents(32767);

//const client = new Discord.Client({ intents });
const client = new Client();

client.start(config.token);


/*
client.on("messageCreate", message => {
	//console.log(message.content);
	
	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if(!command) return message.reply(`This is not a valid command!`);

	command.run(message, args, client);
})
*/
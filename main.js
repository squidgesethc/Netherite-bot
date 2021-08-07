const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '_';

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.command.set(command.name, command)
}


client.once('ready', () =>{
    console.log('I am Online')
});

client.on('message', message =>{
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();
    if(command === 'noob'){
        client.command.get('noob').execute(message, args);
    } else if(command === 'help'){
        client.command.get('help').execute(message, args, Discord);

    } else if(command === 'cannonlives'){
        client.command.get('cannonlives').execute(message, args);
    } else {
        client.command.get('null').execute(message, args);
    }

});


client.login('ODU5ODE0ODkzOTU0NzkzNTAz.YNyLBQ.SxHNF5woXFOhETyHO4FT9dEKpcI')

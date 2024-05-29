const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '!';

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'warn') {
    // Logic for warning a user
  } else if (command === 'mute') {
    // Logic for muting a user
  } else if (command === 'kick') {
    // Logic for kicking a user
  } else if (command === 'ban') {
    // Logic for banning a user
  } else {
    message.channel.send('Invalid command');
  }
});

client.login('your-token-goes-here');
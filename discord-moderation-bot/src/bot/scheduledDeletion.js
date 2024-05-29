const schedule = require('node-schedule');
const discord = require('discord.js');

const scheduledDeletion = {
  initializeScheduledDeletion: (client) => {
    schedule.scheduleJob('0 0 * * *', async () => {
      try {
        const guild = client.guilds.cache.get('YOUR_GUILD_ID_HERE');
        if (!guild) return;

        const channel = guild.channels.cache.find(channel => channel.name === 'YOUR_CHANNEL_NAME_HERE');
        if (!channel) return;

        const messages = await channel.messages.fetch({ limit: 100 });
        messages.forEach(message => {
          if (message.createdTimestamp < Date.now() - 7 * 24 * 60 * 60 * 1000) {
            message.delete();
          }
        });
      } catch (error) {
        console.error('Error deleting scheduled messages:', error);
      }
    });
  }
};

module.exports = scheduledDeletion;
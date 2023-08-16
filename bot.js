import { config } from 'dotenv';
config();
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log('Bot pronto para uso');
});

client.on('messageCreate', (message) => {
    if(message.content === 'Monitor is DOWN'){
        message.react('🤬');
    }
});

client.login(process.env.BOT_TOKEN);
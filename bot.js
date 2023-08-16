import { config } from 'dotenv';
config();
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on('ready', () => {
    console.log('O cot está pronto pra uso');
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
});
client.login(process.env.BOT_TOKEN);


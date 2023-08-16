import { config } from 'dotenv';
config();
import { Client } from 'discord.js';
const client = new Client({ intents: ['Guilds','GuildMessages'] });
client.on('ready', () => {
    console.log('O cot está pronto pra uso');
});


client.login(process.env.BOT_TOKEN);


import { config } from 'dotenv';
config();
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on('ready', () => {
    console.log('O cot está pronto pra uso');
});


client.on('message', async msg => {
    if(msg.content === 'ping'){
        msg.reply("Pong!");
    }
});
client.login('MTE0MTAyNzQ4NjQ0MDg5MDU0MA.GRL8_J.s2NoWifcPEC8jBVW6ODierSo6jexvsCLYO1gmo');
import { config } from 'dotenv';
config();
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const messageQueue = new Map();
const channelIDs = ['1141103011192639673'];
client.on('ready', () => {
  console.log('Bot pronto para uso');
});

function extractUrls(text) {
  const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/g;
  return text.match(urlPattern) || [];
}

const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/g;
client.on('messageCreate', async message => {
  const urls = extractUrls(message.content);

  async function processMessages() {
    if (urls.length > 0 && channelIDs.includes(message.channel.id)) {
      for (const url of urls) {
        const matchingDownMessage = messageQueue.get(`${url}-down`);
        
        if (message.content.includes('Monitor is DOWN')) {
          // Se já houver uma mensagem "Monitor is DOWN" correspondente à URL, delete as duas mensagens
          if (matchingDownMessage) {
            await matchingDownMessage.delete();
            await message.delete();
            messageQueue.delete(`${url}-down`);
          } else {
            // Caso contrário, adicione a mensagem "Monitor is DOWN" à fila
            messageQueue.set(`${url}-down`, message);
          }
        } else if (message.content.includes('Monitor is UP')) {
          // Se já houver uma mensagem "Monitor is DOWN" correspondente à URL, delete as duas mensagens
          if (matchingDownMessage) {
            await matchingDownMessage.delete();
            await message.delete();
            messageQueue.delete(`${url}-down`);
          }
        }
      }
    }
  }

  await processMessages();
});

client.login(process.env.BOT_TOKEN);
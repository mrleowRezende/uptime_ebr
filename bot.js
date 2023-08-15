require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const messageQueue = new Map();

client.once('ready', () => {
    // console.log('Logged in as ' + client.user.tag);
    console.log("O bot está pronto para funcionar")
});

//client.on('message', async message => {


    // Verifica se a mensagem contém "dominio.com.br" e "Monitor is DOWN"
    //if (message.content.includes('dominio.com.br') && message.content.includes('Monitor is DOWN')) {
        // Adiciona a mensagem à fila com a chave como ID do autor
        //messageQueue.set(message.author.id, message.content);
    //}
    
    // Verifica se a mensagem contém "dominio.com.br" e "Monitor is UP"
    //if (message.content.includes('dominio.com.br') && message.content.includes('Monitor is UP')) {
        // Verifica se o autor tem uma mensagem na fila com "Monitor is DOWN"
        //if (messageQueue.has(message.author.id)) {
            // Deleta a mensagem "Monitor is DOWN"
            //const prevMessage = await message.channel.messages.fetch({ limit: 1, before: message.id });
            //if (prevMessage.size > 0 && prevMessage.first().content.includes('Monitor is DOWN')) {
                //await prevMessage.first().delete();
            //}
            
            // Deleta a mensagem atual com "Monitor is UP"
            //await message.delete();

            // Remove a mensagem da fila
            //messageQueue.delete(message.author.id);
        //}
    //}
//});

client.login(process.env.BOT_TOKEN);

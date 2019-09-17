import 'dotenv/config';

const TelegramBot = require('node-telegram-bot-api')

const token = `${process.env.TELEGRAM_TOKEN}`
const bot = new TelegramBot(token, {polling: true})

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Received your message');
});
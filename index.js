const TelegramApi = require('node-telegram-bot-api');
const TOKEN = '2049468452:AAG8FSNiGNcH3IzfSaOGUObNEDDxNqL9Frc'

const bot = new TelegramApi(TOKEN, {polling: true})
const chats = { }

const start = async () => {
    bot.setMyCommands([
        {command: '/start', description: 'Прив'},
        {command: '/game', description: 'Поиграть в игру'}
    ])
    
    bot.on('message', async msg => {
        const {text, chat, from} = msg,
              chatId = chat.id
        if(text === '/start') {
            // await bot.sendSticker()
            return bot.sendMessage(chatId, `Ты ${from.first_name}`) 
        }

        if(text === '/game') {
            await bot.sendMessage(chatId, 'Сейчас я загадаю тебе цифру от нуля до 9!')

            const randomNum = Math.floor(Math.random() * 10)

            chats[chatId = randomNum]

            return bot.sendMessage(chatId, 'Отгадывай, сука !')
        }
    
        return bot.sendMessage(chatId, 'Я тебя не понимать !') 
        console.log(msg)
    })
}

start()
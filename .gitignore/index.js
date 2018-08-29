const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDgwODMzMjQ3NzExMDY4MTcw.DlyBaw.KqTr0E-fzer8-LIGHWxNKbnJiRg')

bot.on('message', function (message) {
    if (message.content === 'c qui la best ?') {
        message.channel.send ('arale ^^')
    }
})

bot.on ('message' ,function (message) {
    if (message.content === 'hasagi !') {
        message.channel.send ('yasuo le main de ARALE')
    }
})

bot.on ('message' ,function (message) {
    if (message.content === 'oui') {
        message.channel.send ('fi')
    }
})

bot.on ('message' ,function (message) {
    if (message.content === 'test') {
        message.channel.send ('test.')
    }
})

bot.on ('message' ,function (message) {
    if (message.content === '.') {
        message.channel.send ('..')
    }
})

bot.on ('message' ,function (message) {
    if (message.content === 'pupupupupu') {
        message.channel.send ('publicité !')
    }
})

const Discord = require('discord.js');
const config = require('./config.js');
const bot = new Discord.Client ({DisableEveryone: true});

bot.on('ready', async () =>{
    console.log('SpazBot ready.')
    bot.user.setActivity('Version : 0.0.2');
});

bot.on('message', async () =>{
    if (msg.content == 'hello') {
        msg.channel.send('hello');
    }
});

bot.login(process.env.TOKEN);
const Discord = require('discord.js');
const bot = new Discord.Client ({DisableEveryone: true});

bot.on('ready', async () =>{
    console.log('SpazBot ready.')
    bot.user.setActivity('Version : 0.0.1');
});

bot.login(process.env.TOKEN);
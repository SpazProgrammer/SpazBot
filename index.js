const Discord = require('discord.js');
const config = require('./config.js');
const bot = new Discord.Client ({DisableEveryone: true});

bot.on('ready', async () =>{
    console.log('SpazBot ready.')
    bot.user.setActivity('Version : 0.0.3');
});

bot.on('message', async () =>{
    if (msg.content.startWith(config.prefix) && !msg.author.bot) {
        cmdArray = msg.content.substring(1).split()
        cmd = cmdArray[0]
        args = cmd.slice(1)

        msg.channel.send(cmd)
    }
});

bot.login(process.env.TOKEN);
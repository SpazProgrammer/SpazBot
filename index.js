const Discord = require('discord.js');
const client = new Discord.Client({
	fetchAllMembers: true
});
const config = require('./config.js');
fs = require('fs')

client.login(config.token)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
	if(err) throw err
	files.forEach(file => {
		if (!file.endsWith('.js')) return
		const command = require(`./commands/${file}`)
		client.commands.set(command.name, command)
	})
})

client.on('ready', () => {
	console.log('SpazBot ready')
	client.setActivity('Version : 0.0.1')
})

client.on('message', message => {
	const args = message.content.trim().split(/ +/g)
	const commandName = args.shift().toLowerCase()
	if (!commandName.startsWith(config.prefix)) return
	const command = client.commands.get(commandName.slice(config.prefix.length))
	if (!command) return
	command.run(message, args, client)
})
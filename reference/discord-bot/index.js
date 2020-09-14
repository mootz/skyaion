const { Client } = require('discord.js')
const client = new Client()
const { token } = require('./config.json')
const welcome = require('./modules/welcome')

client.login(token)

client.on('ready', () => {
  console.log(`${client.user.tag} is ready!`)
})

client.on('guildMemberAdd', async member => {
  const image = await welcome(member.user, member.user.displayAvatarURL({ format: 'png', size: 256 }))
  const channel = client.channels.cache.get('747560549335695482')
  channel.send(`:flag_ru:
Приветствую, <@${member.id}>!
Добро пожаловать в Discord нашего сервера SkyAion 2.5
Выбери расу, откроются дополнительные категории и каналы.
:flag_gb:
Hi, <@${member.id}>!
Welcome to Discord of our SkyAion 2.5 server
Select race, additional categories, and channels will open.
`, {
    files: [image]
  })
})
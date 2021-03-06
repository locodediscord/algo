module.exports = async (client, message) => {

  const ModelPrefix = require("../database/models/Prefix")

  if (message.channel.type === "dm") return

  let obt = await ModelPrefix.findOne({
    guildID: message.guild.id,
    guildName: message.guild.name
  }).exec()
  let prefix = obt ? obt.prefix : "d!"

  if (message.author.bot) return;

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)`))) {
    message.channel.send(`Mi Prefix en este servidor es \*\*${prefix}\*\* usa ${prefix}help para mas ayuda`)
  }

  if (!message.content.startsWith(prefix)) return

  console.log(`${message.author.tag}: ${message.content}`)


  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  let cmd = client.commands.get(command) || client.commands.find(c => c.alias && c.alias.includes(command))
  if (cmd) {
    return cmd.run(client, message, args, prefix)
  }
}

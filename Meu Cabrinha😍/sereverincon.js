
const Discord = require('discord.js');

module.exports = {
      nombre: "icon",
      alias: [],
      descripcion: "Muestra el icono del servidor",
      run: (client, message, args) => {
     

         let server = message.guild
           let embed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setTitle(' Icono de ' + server.name)
           .setImage(server.iconURL ( {size: 1024, dynamic: true }))
           .setFooter("Pedido por: " + message.member.displayName, message.author.displayAvatarURL());
           message.channel.send(embed)
            }
      }
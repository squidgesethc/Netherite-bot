module.exports = {
    'name': 'help',
    'description': 'Displays help',
    execute(message, args, Discord){
        const help = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Help')
        .setURL('https://www.youtube.com/channel/UC_wMt9YDbiIwGaEDtO8A53g')
        .addFields(
            { name: '_cannonlives', value: 'Shows our cannonlives', inline: true},
            { name: '_noob', value: 'Calls Riley A noob HAHAHA', inline: true},

        )
        .setTimestamp()
        message.channel.send(help)

    }

}

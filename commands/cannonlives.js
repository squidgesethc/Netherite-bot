module.exports = {
    'name': 'cannonlives',
    'description': 'shows our cannonlives',
    'HarryLives': 2,
    'SethLives': 3,
    'RileyLives': 2,

    execute(message, args){
        message.channel.send('\nRiley\'s lives : ' + this.RileyLives + '\nSeth\'s lives : ' + this.SethLives + '\nHarry\'s lives : ' + this.HarryLives);
    }
}
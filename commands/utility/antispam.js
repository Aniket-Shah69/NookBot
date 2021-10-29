module.exports = {
    name: 'antispam',
    run: async(client, message, args) => {
        if(args[0] === 'on') {
            await db.set(`antispam ${message.guild.id}`, true)
            message.channel.send('Turned on antispam features!')
        } else if(args[0] === 'off') {
            await db.delete(`antispam ${message.guild.id}`)
            message.channel.send('Turned off antispam feature!')
        }
    }
}
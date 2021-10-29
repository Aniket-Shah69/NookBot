module.exports - {
    name : 'kick',
    run : async (client, message, args) => {
        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('I dont have permission to kick members')
        const Member = message.mentions.first()
        if (!Member) return message.channel.send('Please Specify a member to kick!')
        await Member.kick({ reason: args.slice(1).join(" ") })
        message.channel.send(`${Member.user.tag} was kicked from the server.`)

    }
}
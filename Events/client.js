const { Client, GatewayIntentBits, Partials } = require('discord.js')
const { Channel, Reaction, Message, GuildMember } = Partials
const { Guilds, MessageContent, GuildMessages, GuildMembers, GuildVoiceStates, GuildMessageReactions, GuildPresences } = GatewayIntentBits
const client = new Client({
  intents: [
    Guilds,
    MessageContent,
    GuildMessages,
    GuildMembers,
    GuildVoiceStates,
    GuildMessageReactions,
    GuildPresences
  ], partials: [
    Channel,
    Reaction,
    Message,
    GuildMember],
})

module.exports = client
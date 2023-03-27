
module.exports = {
    data: {
        name: "ping",
        description: "ping",
    },
    run: (interaction) => {
        interaction.reply({ content: `${interaction.client.ws.ping}`, ephemeral: true })

    }
} 
module.exports = {
    name: 'interactionCreate',

    run: (interaction, client) => {

        if (interaction.isCommand()) {          

            const command = client.slash.get(interaction.commandName);

            if (!command) return;

            if (!interaction.member.permissions.has(command.permissions || [])) return interaction.reply({ content: "Sem permissão"})

                try {
                    command && command.run(interaction);  
                } catch (err) {
                    console.error(err);
                    interaction.reply({ content: 'Ocorreu um erro ao executar esta aplicação, tente novamente mais tarde.', ephemeral: true });
                }
            } 
        }
    }
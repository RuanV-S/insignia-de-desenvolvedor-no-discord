module.exports = {
    run: (client) => {
      const { REST } = require('@discordjs/rest');
      const { Routes } = require('discord.js');
      const fs = require('node:fs');
      const { Collection } = require('discord.js')
      const config = require('../config.json')
      
      client.slash = new Collection()
      const commands = [];
      const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
  
      const clientId = (config.clientId);
      const guildId = (config.guildId);
  
      for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.slash.set(command.data.name, command)
        commands.push(command.data);
      }
  
      const rest = new REST({ version: '9' }).setToken(config.token);
  
      (async () => {
        try {
          console.log('☑️ | [CLIENT INFO] Iniciado atualização das aplicações (/) Comandos.');
  
          await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
          );
  
          console.log('✅ | [CLIENT INFO] Atualização feita com sucesso (/) Comandos.');
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }
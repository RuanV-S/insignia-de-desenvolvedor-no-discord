const { ActivityType } = require('discord.js')

module.exports = {
    name: 'ready',

    run: async (client) => {
        let activities = [
            `By Simplify`,        
        ],
            i = 0;

        setInterval(() => {
            client.user.setPresence({
                activities: [{ name: `${activities[i++ % activities.length]}`, type: ActivityType.Playing }]
            })
        }, 5000);

    
        console.log(`✅ | [CLIENT INFO] Todos direitos reservados a Simplify Code.`)      
    }
}
const { token } = require('./config.json')
const client = require('./Events/client')
require('./handlers/events').run(client)
require('./handlers/slashcommands').run(client)
client.login(token);
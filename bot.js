const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("502157334311731251")
setInterval(function() {
channel.send(`sadfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfasdf`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

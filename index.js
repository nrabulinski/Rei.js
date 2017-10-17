const Discord = require("discord.js");
const fs = require('fs');
const client = Discord.Client();

/*
    Config loading
*/
let config = { };
try {
    config = require('./data/config.json');
} catch (err) {
    config = { token: "", ownerid: "" }

    // Create files
    fs.mkdirSync('./data/');
    fs.writeFileSync('./data/config.json', JSON.stringify(config));

    console.log("I noticed that you don't have an existing config file. I've created it at /data/config.json!");
    return 0;
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.name} [${client.user.id}]`)
});
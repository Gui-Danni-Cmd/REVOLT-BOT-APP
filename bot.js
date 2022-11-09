const { Client } = require("revolt.js");

let client = new Client();

client.on("ready", async () =>
    console.info(`Você Conectou ${client.user.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "Olá") {
        message.channel.sendMessage("Como você está?");
    }
});


client.loginBot("")
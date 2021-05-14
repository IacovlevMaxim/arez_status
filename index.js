const { Client } = require('discord-rpc');

const client = new Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Virtus et Honos",
            assets: {
                large_image: "large",
                large_text: "Arez.Design",
                small_image: "large",
                small_text: "Made by Stew#1902"
            },
            buttons: [
                { label: "Join my Discord", url: "https://discord.gg/ywbNFy8" },
            ]
        }
    })
    .catch(console.error)
    console.log("Status is ready to use!");
});

client.login({ clientId: "791632847421177877" }).catch(console.error);


const { Client, IntentsBitField, ActivityType } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: "Under Ctrl",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/watch?v=OqxHy8sCtvA&list=PLpmb-7WxPhe0ZVpH9pxT5MtC4heqej8Es&index=6",
  },
  {
    name: "Custom Status 1",
  },
  {
    name: "Custom Status 2",
    type: ActivityType.Watching,
  },
  {
    name: "Custom Status 3",
    type: ActivityType.Listening,
  },
];

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

client.login(process.env.TOKEN);

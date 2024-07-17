module.exports = {
  name: "ping",
  description: "Pong!",
  // devOnly: boolean,
  // testOnly: boolean  ,
  // options : Object[],
  // deleted:
  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};

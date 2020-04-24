/*Base*/
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

/*Variables*/
const Prefix = '';
const Token = 'NjU1ODM0ODMxODg3OTI1MjQ4.XqILaQ.Vs7ycqpzhYu2C9q4tsvcpFUymtM';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === Prefix + 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === Prefix + '4k') {
    const attachement = new MessageAttachment('https://i.imgur.com/CgRvwzj.jpeg')
    msg.channel.send(attachement);
  }
});

client.login(Token);
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  let textChannel = member.guild.channels.find(channel => channel.id === '697940161891270676');
  let otherchannel = member.guild.channels.find(channel => channel.id === '676541745462247447');
  if (textChannel && otherchannel){
    let info = otherchannel.toString()
    const exampleEmbed = {
      color: 0xFFC0CA,
      title: `***User Joined!***`,
      description: `**${member} has contracted big brain syndrome.**`,
      thumbnail: {
        url: member.user.avatarURL,
      },
      fields: [{
        name: "Information",
        value: `Head on down to ${info} to choose your coloured role.`
      }
    ],
      timestamp: new Date(),
    };
    textChannel.send({embed: exampleEmbed});
  };
});
client.login('process.env.BOT_TOKEN');

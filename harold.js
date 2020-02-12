const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let notcommand = new Discord.RichEmbed()
  .setColor("#ed0c75")
  .setDescription(`❌ Commands are only available in <#${message.guild.settings.botChannel}>`)
  
  let commandschannel = message.channel.id === message.guild.settings.botChannel
  if(!commandschannel) return message.channel.send(notcommand);  
  
  var answers = [
    'https://cdn.discordapp.com/attachments/649543797075869730/659335462543949826/image0.png',
    'https://cdn.discordapp.com/attachments/649543797075869730/659335495855243274/image0.jpg',
    'https://cdn.discordapp.com/attachments/649543797075869730/659336081992581142/image0.png',
    'https://cdn.discordapp.com/attachments/649543797075869730/659336159427559424/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/645800903923728395/image1.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/645800904985149456/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/645800905530277898/image2.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/658452343683022848/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/656675847490502667/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/655160878353874981/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/654494685305372682/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/650097232531423242/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/649127829241331734/image0.png',
    'https://cdn.discordapp.com/attachments/642994841789399040/648378201210355726/IMG_20180805_070808990.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/648064959250432011/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/647897284712857660/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/569014380985843712/IMG_20190419_220738852.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/646595189284274176/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/646201239608229889/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/645791981364051968/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/645381582399471626/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/644892895949881390/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/644678584472043551/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/644030616639242252/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/641175254483337237/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/639887327321391104/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/635644112564912148/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/629810412296339467/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/629109983702810629/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/628603502398013450/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/625100882106777612/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/622564504240390184/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/622074036813430794/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/621478817365753887/image0.png',
    'https://cdn.discordapp.com/attachments/483468282008043522/617597632008814612/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/616409604880072725/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/616013026352693279/image0.jpg',
    'https://cdn.discordapp.com/attachments/483468282008043522/614936152901943356/image0.png',
    'https://cdn.discordapp.com/attachments/649543797075869730/659728792792858645/image0.png'
  ];
      var answer = answers[Math.floor(Math.random() * answers.length)];
      let harEmbed = new Discord.RichEmbed()
      .setColor("#ed0c75")
      .setTimestamp()
      .setImage(answer)
      .setTitle("**HAROLD** PICTURE :heart_eyes_cat:")

    message.channel.send(harEmbed)
}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
};

exports.help = {
  name: "harold",
  description: "Get a nice harold picture",
  usage: ""
};
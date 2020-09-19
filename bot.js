const robot = require("discord.js")
const hama = new robot.client()

client.on("message", message => {
if (message.content.startsWith(prefix + "send")) {
if (!message.member.hasPermission("ADMINISTRATOR")) return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(" ");
message.guild.members
.filter(m => m.presence.status !== "offline")
.forEach(m => {
m.send(`${argresult}\n ${m}`);
});
message.channel.send(
`\`${
message.guild.members.filter(m => m.presence.status !== "online").size
}\` : lo awanda kasa chu`
);
message.delete(); 
}
});



client.login("NzU2OTMwNjY1MjQ0NTI0NTQ2.X2ZAnQ.juix4B4JRSosO2BGESJ3JYueBJQ");

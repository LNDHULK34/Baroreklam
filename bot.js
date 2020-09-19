
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

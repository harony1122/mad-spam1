const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});





client.on("ready", () => {
let channel =     client.channels.get("544368853568716809")
setInterval(function() {
channel.send(`spaaamamaa`);
}, 30)
})




client2.on("ready", () => {
let channel =     client.channels.get("544368853568716809")
setInterval(function() {
channel.send(`spaaamamaa`);
}, 30)
})



client3.on("ready", () => {
let channel =     client.channels.get("544368853568716809")
setInterval(function() {
channel.send(`spaaamamaa`);
}, 30)
})



client4.on("ready", () => {
let channel =     client.channels.get("544368853568716809")
setInterval(function() {
channel.send(`spaaamamaa`);
}, 30)
})




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);//
client3.login(process.env.TOKEN3);//
client4.login(process.env.TOKEN4);//

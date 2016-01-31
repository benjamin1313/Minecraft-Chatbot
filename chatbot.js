var mineflayer = require('mineflayer'); //to get it use npm install mineflayer
var cleverbot = require("cleverbot.io"); //to get it use npm install --save cleverbot.io
cbot = new cleverbot("YOUR_API_USE", "YOUR_API_KEY"); //get them on cleverbot.io

var bot = mineflayer.createBot({
  host: "123.456.78.9", // ip
  port: 25565,       // port
  username: "your@mail.com", // email and password are required only for
  password: "pass",          // online-mode=true servers
});

cbot.create(function (err, session) { //conects to cleverbot.io
});

//registers a when a player post something to chat
//and return username and the meassage
bot.on('chat', function(username, message) { 
    var message=message.toLowerCase();       
    if(username.indexOf(bot.username) >= 0) { //checks if user is the bot
        return;
    }else{
        //asks cleverbot.io and posts awnser to chat
        cbot.ask(message, function (err, response) {
            if (response=='Error, the reference "" does not exist') return;
            else{
                bot.chat(response);
            }
        });
       }
});


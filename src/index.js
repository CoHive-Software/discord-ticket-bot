import { discord } from "./discord.js";
import { sendTest, sendTwilioSMS } from "./twilio.js";
import members from './members/index.js';


/**
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ^^^^^^^^^^ EVENT LISTENERS ^^^^^^^^^^
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */

// TODO EVENT HAPPENS
// MAKE TWILIO API CALL
// // members.json
// // --> grab phone numbers, emails
// // --> twilio sends out notifications (info sent)
// .then((data) => Discord "NOTIFICATIONS SENT")
// .error((err) => Discord "I couldn't send it")

/**
 * @see https://old.discordjs.dev/#/docs/discord.js/main/general/welcome
 * @description: for BOT API documentation
 */

discord.on("ready", (bot) => {
  console.log(`✅ ${bot.options.rest.authPrefix} ${bot.user.tag} is online! Listening to channels: ${bot.channels}`);
});

/**
 * @description use `message.channel` to validate channel from channel data
 */
discord.on("messageCreate", (message) => {
  /* this validation disallows bots from responding to each other/themselves, remove at your own risk 💀 */
  if (message.author.bot) return;

  console.log("LOOK HERE", message.createdAt + 24);

  if (message.channel.parentId === "1126197975983591534" && message.channel.messageCount === 1) {
    const projectName = message.channel.name;
    const projectOwner = message.author.username;
    const projectCreatedAt = message.createdAt;
    // sendTwilioSMS(projectName, projectOwner, projectCreatedAt);
    console.log("WE MADE IT!", projectName, projectOwner, projectCreatedAt);
    message.reply("( ͡° ͜ʖ ͡°)");
  }

  /* message sent in server from any user: */
  console.log(`Discord message: "${message.content}" from User: ${message.author.username} at ${message.createdAt}`);
  console.log("CHANGE NAME:", message.author, message);

  /* bot will react to any message sent with this emoji */
  // message.react('🤓');
});

discord.login(process.env.TOKEN);

// WORKS!
// sendTwilioSMS();

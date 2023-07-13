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

discord.on("messageCreate", (message) => {
  /* this validation disallows bots from responding to each other/themselves, remove at your own risk 💀 */
  if (message.author.bot) return;

  /* message sent in server from any user: */
  console.log(`Discord message: "${message.content}" from User: ${message.author.username} at ${message.createdAt}`);

  /* bot will react to any message sent with this emoji */
  message.react('🤓');
});

discord.login(process.env.TOKEN);

// WORKS!
// sendTwilioSMS();

// TODO Establish Discord Listen to "Projects" forum channel "new post" event
// TODO Hook up sendTwilioSMS fn to Discord Event Listener


import { Client, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
dotenv.config();


/**
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ^^^^^^^^^ DISCORD BOT INIT ^^^^^^^^^
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */

/**
 * @description This array represents the categories of Events we want available to our Bot.
 * @argument: `IntentsBitField.Flags.Guilds`
 * @satisfies Intents with "Guilds" flags facilitates Server access
 * @argument: `IntentsBitField.Flags.MessageContent`
 * @satisfies "MessageContent" permits your app to receive message content data across the APIs.
 * @see https://discord.com/developers/docs/topics/gateway#message-content-intent
 */
const intentOptions = [
  IntentsBitField.Flags.Guilds,        // <-- server
  IntentsBitField.Flags.GuildMembers,  // <-- members in server
  IntentsBitField.Flags.GuildMessages, // <-- messages in server
  IntentsBitField.Flags.MessageContent // <-- messages content
];

/**
 * @class: `Client` from discord.js
 * @instance: `discord` is our Bot instance
 * @argument: must take in an options object with `intents` array, all other properties are optional
 *
 * @method: `.on("event" callback)` for bot event handling
 */
export const discord = new Client({
  intents: intentOptions
});

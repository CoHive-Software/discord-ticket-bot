import twilio from 'twilio';
import members from './members/index.js';
import dotenv from "dotenv";
dotenv.config();


/**
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ^^^^^^^^^ TWILIO SDK INIT ^^^^^^^^^
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);


/**
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * ^^^^^^^^^ TWILIO HELPERS ^^^^^^^^^
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 */

// TODO refactor: SMS call and EMAIL call separate functions (check if null value for `member.email`)
// TODO refactor: iterate over members only ONCE and call both functions

export const sendTwilioSMS = (title, creator, date) => {
  // TODO accept "date" parameter and format to be human readable time 12-hour clock
  members.forEach((member) => {
    if (member.phone) {
      client.messages
        .create({
          body: `A new project is ready on the Discord "projects" Channel board: ${title} from ${creator} @ ${date}. If you would like to work on this project please react by Tomorrow morning. ༼ つ ◕_◕ ༽つ`,
          from: TWILIO_PHONE_NUMBER,
          to: member.phone
        })
        .then(message => console.log("unique message indicator", message.sid, "message object:", message))
        .catch(err => console.error(err));
      }
    });
  console.log("TWILIO SMS PUSHED TO ALL MEMBERS");
};

export const sendTest = () => {
  const target = members.find(el => el.name === "Colin Williams");
  client.messages
    .create({
      body: "hello testing 123",
      from: TWILIO_PHONE_NUMBER,
      to: target.phone
    })
    .then(message => console.log("unique message indicator", message.sid, "message object:", message))
    .catch(err => console.error(err));
};

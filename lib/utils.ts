import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Looking to send emails in production? Check out our Email API/SMTP product!
const { MailtrapClient } = require("mailtrap");

const TOKEN = "565ae107a74e74d8c8b09ba6b8ca7de5";

const client = new MailtrapClient({
  token: TOKEN,
  testInboxId: 3328501,
});

const sender = {
  email: "hello@example.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "nbaisaloi8@gmail.com",
  }
];
export const sendMail=()=>{

client.testing
.send({
  from: sender,
  to: recipients,
  subject: "You are awesome!",
  text: "Congrats for sending test email with Mailtrap!",
  category: "Integration Test",
})
.then(console.log, console.error);
}
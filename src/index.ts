import { Client } from "discord.js";
import setupRules from "./setup-rules";

console.log("Bot is starting...");

const client = new Client({
    intents: [],
});

console.log(client);

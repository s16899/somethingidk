/*
Required to install : 
rest : npm i @discordjs/route
dotenv : npm i -D dotenv
discord.js V14 : npm i discord.js
slash cmd builders : npm i @discordjs/builders
*/

import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { config } from 'dotenv';
import { REST } from '@discordjs/rest';
import OrderCommand from './commands/orderCake.js';
import RolesCMD from './commands/roles.js';

config();

const TOKEN = process.env.TOKEN
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.once("ready", () => {
    console.log(`${client.user.tag} has logged in!`)
});

client.on('interactionCreate', (interaction) => {
    if(interaction.isChatInputCommand()){
        console.log("Hello, world!");
        interaction.reply({ content: interaction.options.get('echo').value });
    }
});

client.on('messageCreate', (message) => {
    console.log(`${message.author.tag} : ${message.content} [MESSAGE CREATED AT]: ${message.createdAt.toDateString()}`);
});

async function main() {

    

    const commands = [OrderCommand];
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
          body: commands,
        });
        client.login(TOKEN);
      } catch (err) {
        console.log(err);
      }
    }

main();
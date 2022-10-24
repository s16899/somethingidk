/*
Required to install : 
rest : npm i @discordjs/route
dotenv : npm i -D dotenv
discord.js V14 : npm i discord.js
slash cmd builders : npm i @discordjs/builders
*/

import { ActionRowBuilder, Client, GatewayIntentBits, Routes, SelectMenuBuilder, TextInputBuilder, TextInputComponent, TextInputStyle } from 'discord.js';
import { config } from 'dotenv';
import { REST } from '@discordjs/rest';
import OrderCommand from './commands/orderCake.js';
import RolesCMD from './commands/roles.js';
import reportCMD from './commands/report.js';
import { ModalBuilder } from '@discordjs/builders';

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
        if(interaction.commandName === 'cakes'){
            console.log('Order Command');
            console.log(interaction);
            const actionRowComponent = new ActionRowBuilder().setComponents(
                new SelectMenuBuilder()
                    .setCustomId('cake_opt')
                    .setOptions(
                        [
                            { label: 'Chocolate Cake', value: 'chocolate_cake' },
                            { label: 'Vanilla Cake', value: 'vanilla_cake' },
                            { label: 'Lime Cake', value: 'lime_cake' },
                            { label: 'bubblegum Cake', value: 'bubblegum_cake' },
                        ])
            );
            interaction.reply({
                components: [actionRowComponent.toJSON()],
            });
        }else if (interaction.commandName === 'report'){
            const modal = new ModalBuilder()
                .setTitle('Report User Form')
                .setCustomId('reportForm')
                .setComponents(
                    new ActionRowBuilder().setComponents(
                        new TextInputBuilder().setLabel('Username of user that violated the rule').setCustomId('reportedUsers').setStyle(TextInputStyle.Short))
                );

            interaction.showModal(modal)
        }
    } else if (interaction.isSelectMenu()){
        interaction.reply({ content: `HI!` });
    }
});

client.on('messageCreate', (message) => {
    console.log(`${message.author.tag} : ${message.content} [MESSAGE CREATED AT]: ${message.createdAt.toDateString()}`);
});

async function main() {

    

    const commands = [OrderCommand, RolesCMD, reportCMD];
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
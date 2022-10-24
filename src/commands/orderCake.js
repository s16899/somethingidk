import { SlashCommandBuilder } from '@discordjs/builders';

const orderCakeCMD = new SlashCommandBuilder()
        .setName('cakes')
        .setDescription("orders some nice cakes")
        // .addStringOption((option) => 
        //     option
        //         .setName('cake')
        //         .setDescription('orders some good foods')
        //         .setRequired(true)
        //         .setChoices(
        //             {
        //                 name: 'Chocolate Cake',
        //                 value: "chocolate_cake",
        //             },
        //             {
        //                 name: 'Vanilla Cake',
        //                 value: "vanilla_cake",
        //             },
        //             {
        //                 name: 'Lime Cake',
        //                 value: "lime_cake",
        //             },
        //             {
        //                 name: 'bubblegum Cake',
        //                 value: "bubblegum_cake",
        //             },
        //         ),
        // ).addStringOption((option) =>
        //     option
        //         .setName('toppings')
        //         .setDescription('adds some toppings')
        //         .setRequired(false)
        //         .setChoices(
        //             {
        //                 name: 'Chocolate Chips',
        //                 value: 'choco_chips',
        //             },
        //             {
        //                 name: 'edible gold',
        //                 value: 'gold',
        //             },
        //             {
        //                 name: 'fruits',
        //                 value: 'fruits',
        //             },
        //         ),
        // );

export default orderCakeCMD.toJSON();
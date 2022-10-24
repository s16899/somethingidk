import { SlashCommandBuilder } from "@discordjs/builders";

const reportCMD = new SlashCommandBuilder()
    .setName('report')
    .setDescription('reports a user that violates the rule of the server and discords official guidelines');

export default reportCMD.toJSON();
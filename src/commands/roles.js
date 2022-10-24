import { SlashCommandBuilder } from "@discordjs/builders";

const rolesCMD = new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('adds a role')
    .addRoleOption((option) =>
        option
            .setName('newrole')
            .setDescription("adds a new role")
            .setRequired(true)
    );

export default rolesCMD.toJSON();
import { SlashCommandBuilder } from "@discordjs/builders";

const rolesCMD = new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('adds a role')
    .addRoleOption((option) =>
        option
            .setName('New Role')
            .setDescription("adds a new role")
    );

export default rolesCMD.toJSON();
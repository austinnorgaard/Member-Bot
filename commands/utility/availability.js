/* const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "guild_id": "1195271842244608020",
  "name": "set-schedule",
  "description": "Allows user to set their availability",
  "options": [
    {
      "type": 3,
      "name": "day",
      "description": "Days of availability",
      "choices": [
        {
          "name": "Sunday"
        },
        {
          "name": "Monday"
        },
        {
          "name": "Tuesday"
        },
        {
          "name": "Wednesday"
        },
        {
          "name": "Thursday"
        },
        {
          "name": "Friday"
        },
        {
          "name": "Saturday"
        }
      ],
      "required": true
    },
    {
      "type": 3,
      "name": "time",
      "description": "The time of availability",
      "choices": [
        {
          "name": "8:00 AM - 9:00 AM"
        },
        {
          "name": "9:00 AM - 10:00 AM"
        },
        {
          "name": "10:00 AM - 11:00 AM"
        },
        {
          "name": "11:00 AM - 12:00 PM"
        },
        {
          "name": "12:00 PM - 1:00 PM"
        },
        {
          "name": "1:00 PM - 2:00 PM"
        },
        {
          "name": "2:00 PM - 3:00 PM"
        },
        {
          "name": "3:00 PM - 4:00 PM"
        },
        {
          "name": "4:00 PM - 5:00 PM"
        },
        {
          "name": "5:00 PM - 6:00 PM"
        },
        {
          "name": "6:00 PM - 7:00 PM"
        },
        {
          "name": "7:00 PM - 8:00 PM"
        },
        {
          "name": "8:00 PM - 9:00 PM"
        },
        {
          "name": "9:00 PM - 10:00 PM"
        }
      ],
      "required": true
    }
  ]
});
 */
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('set-schedule')
		.setDescription('Allows user to set their availability"')
        .addStringOption(option =>
            option.setName('day')
                .setDescription('Days of availability')
                .setRequired(true)
                .setChoices({"name":"Sunday", "value":"Available"}, 
                {"name":"Monday", "value":"Available"}, 
                {"name":"Tuesday", "value":"Available"}, 
                {"name":"Wednesday", "value":"Available"}, 
                {"name":"Thursday", "value":"Available"}, 
                {"name":"Friday", "value":"Available"}, 
                {"name":"Saturday", "value":"Available"}))
        .addStringOption(option =>
            option.setName('time')
                .setDescription('The time of availability')
                .setRequired(true)
                .setChoices({"name":"8:00 AM - 9:00 AM", "value":"Available"}, 
                {"name":"9:00 AM - 10:00 AM", "value":"Available"}, 
                {"name":"10:00 AM - 11:00 AM", "value":"Available"},
                {"name":"11:00 AM - 12:00 PM", "value":"Available"},
                {"name":"12:00 PM - 1:00 PM", "value":"Available"},
                {"name":"1:00 PM - 2:00 PM", "value":"Available"},
                {"name":"2:00 PM - 3:00 PM", "value":"Available"},
                {"name":"3:00 PM - 4:00 PM", "value":"Available"},
                {"name":"4:00 PM - 5:00 PM", "value":"Available"},
                {"name":"5:00 PM - 6:00 PM", "value":"Available"},
                {"name":"6:00 PM - 7:00 PM", "value":"Available"},
                {"name":"7:00 PM - 8:00 PM", "value":"Available"},
                {"name":"8:00 PM - 9:00 PM", "value":"Available"},
                {"name":"9:00 PM - 10:00 PM", "value":"Available"})),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Pong! - This command was run by ${interaction.user.username}`);
	},
};
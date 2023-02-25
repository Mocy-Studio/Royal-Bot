import { CommandClient } from 'eris';
import config from '../config';
import Handler from '../Handler';

export default class Client extends CommandClient {
	public constructor() {
		super(config.token, {
			// For more intent check: https://abal.moe/Eris/docs/0.17.1/reference
			intents: [ // Just the basic ones
				'guilds',
				'guildMembers',
				'guildMessages',
				'guildMessageReactions',
				'directMessages'
			],
		},
		{
			description: "I'm just a template", // That is not important at all
			prefix: config.prefix,
			owner: config.owner, // Your ID
			ignoreBots: true, // Ignore other bots messages
			ignoreSelf: true, // Ignore self (bot) messages
			defaultHelpCommand: true // If you want default help command add "long description" to commands
		});
	}

	public login(): void {
		Handler.commands(this); // Load Commands
		Handler.events(this); // Load events

		this.connect(); // Login bot
	}
}

// Make command interface
declare module 'eris' {
	export interface Command {
		category: string,
		client: Client
	}
}

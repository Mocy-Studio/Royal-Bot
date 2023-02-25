import { Command, Message } from 'eris';
import Client from '../../Struct/Client';

export default class PingCommand extends Command {
	public category = 'Util';

	constructor(public client: Client) {
		super('ping', (message: Message, args: string[]): void => {
			// Reply instead of just send the message
			message.channel.createMessage({ content: ":ping_pong: | Pong!", messageReference: { messageID: message.id } });
		}, {
			description: 'ping pong with the bot',
			aliases: [],
		});
	}

}

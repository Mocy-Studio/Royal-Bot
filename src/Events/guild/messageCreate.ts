import { Message } from "eris";
import Client from "../../Struct/Client";

export default (bot: Client, message: Message) => {
	// Don't make your commands here, this is just a example

	if(message.content === "!hello") {
		message.channel.createMessage("Hello there!");
	}
}

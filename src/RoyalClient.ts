import Royalbot from './structures/Royalbot.js';
import { ClientOptions, GatewayIntentBits } from 'discord.js';
import config from './config.js';
const { GuildMembers, MessageContent, GuildVoiceStates, GuildMessages, Guilds, GuildMessageTyping } = GatewayIntentBits;
const clientOptions: ClientOptions = {
    intents: [Guilds, GuildMessages, MessageContent, GuildVoiceStates, GuildMembers, GuildMessageTyping],
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false,
    },
};

const client = new Royalbot(clientOptions);

client.start(config.token);

/**
 * Project: royal-bot
 * Author: JohnDavid
 * Company: Mocy-Studio
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Mocy and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/kpHn8Nh8p3
 */
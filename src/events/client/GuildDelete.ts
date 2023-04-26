import { Guild } from '@prisma/client';
import { Event, RoyalBot, Context } from '../../structures/index.js';
import { WebhookClient } from 'discord.js';
export default class GuildDelete extends Event {
  constructor(client: RoyalBot, file: string) {
    super(client, file, {
      name: 'guildDelete',
    });
  }
  public async run(guild): Promise<void> {

    const hook = new WebhookClient({ url: this.client.config.hooks.guildRemove.url });
        if (!hook) return;

        const embed = this.client.embed().setColor(this.client.color.main).setAuthor({ name: `${this.client.user.username} has been removed to a guild.`, iconURL: guild.iconURL({}) }).setTitle(`${guild.name ? guild.name : 'unknowm'}`).setThumbnail(guild.iconURL({})).addFields([
            {
                name: 'Created On',
                value: `<t:${Math.round(guild.createdTimestamp / 1000)}>`,
                inline: false,
            },
            {
                name: 'Added On',
                value: `<t:${Math.round(Date.now() / 1000)}>`,
                inline: false,
            },
            {
                name: 'Guild Id',
                value: `\`${guild.id}\``,
                inline: false,
            },
            {
                name: 'Owner',
                value: `<@${guild.ownerId}> (\`id: ${guild.ownerId}\`)`,
                inline: false,
            },
            {
                name: 'Total Members Count',
                value: `\`[ ${guild.memberCount} ]\``,
                inline: false,
            },
        ]);

        await hook.send({ embeds: [embed] }).catch(() => { });
  }
}

/**
 * Project: royal-bot
 * Author: JohnDavid
 * Company: Mocy-Studio
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Mocy and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/kpHn8Nh8p3
 */
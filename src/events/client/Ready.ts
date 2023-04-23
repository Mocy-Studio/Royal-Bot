import { Event, RoyalBot } from '../../structures/index.js';
import { ActivityType } from 'discord.js';
export default class Ready extends Event {
  constructor(client: RoyalBot, file: string) {
    super(client, file, {
      name: 'ready',
    });
  }
  public async run(): Promise<void> {
    this.client.logger.success(`${this.client.user?.tag} is ready!`);

    this.client.user?.setActivity({
      name: '/help',
      type: ActivityType.Playing,
    });
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
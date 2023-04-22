import RoyalClient from './RoyalClient.js';

export default class Event {
  public client: RoyalClient;
  public one: boolean;
  public file: string;
  public name: string;
  public fileName: string;
  constructor(client: RoyalClient, file: string, options: EventOptions) {
    this.client = client;
    this.file = file;
    this.name = options.name;
    this.one = options.one || false;
    this.fileName = file.split('.')[0];
  }
  public async run(...args: any[]): Promise<any> {
    return Promise.resolve();
  }
}

interface EventOptions {
  name: string;
  one?: boolean;
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
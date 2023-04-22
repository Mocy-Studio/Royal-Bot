import dotent from 'dotenv';
dotent.config();

export default {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  color: {
    red: 0xff0000,
    green: 0x00ff00,
    blue: 0x0000ff,
    yellow: 0xffff00,
    main: 0x2f3136,
  },
  owners: process.env.OWNERS?.split(','),
  database: process.env.DATABASE_URL,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  production: parseBoolean(process.env.PRODUCTION) || true,
};

function parseBoolean(value: string | undefined): boolean {
  if (typeof value === 'string') {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case 'true':
      return true;
    default:
      return false;
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
import config from "./config.js";
import { ShardingManager } from "discord.js";
import Logger from "./structures/Logger.js";
import * as fs from 'fs';

const logger = new Logger();

if (!fs.existsSync("./src/utils/RoyalLogo.txt")) {
  process.exit(1);
}

const logFile = fs.readFileSync("./src/utils/RoyalLogo.txt", "utf-8");
try {
  console.log('\x1b[35m%s\x1b[0m', logFile);
} catch (err) {
  logger.error("[CLIENT] An error has occurred :", err);
}
const manager = new ShardingManager("./dist/RoyalClient.js", {
  respawn: true,
  token: config.token,
  totalShards: "auto",
  shardList: "auto",
});

manager.spawn({ amount: manager.totalShards, delay: null, timeout: -1 }).then((shards) => {
  logger.start(`[CLIENT] ${shards.size} shard(s) spawned.`);
}).catch((err) => {
  logger.error("[CLIENT] An error has occurred :", err);
});

manager.on("shardCreate", (shard) => {
  shard.on("ready", () => {
    logger.start(`[CLIENT] Shard ${shard.id} connected to Discord's Gateway.`);
  });
});

/**
 * Project: royal-bot
 * Author: JohnDavid
 * Company: Mocy-Studio
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Mocy and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/kpHn8Nh8p3
 */
import { url } from 'inspector';
import { Command, RoyalBot, Context } from '../../structures/index.js';

export default class Coinflip extends Command {
  constructor(client: RoyalBot) {
    super(client, {
      name: 'coinflip',
      description: {
        content: "Flips a coin.",
        examples: ['coinflip'],
        usage: 'coinflip',
      },
      category: 'fun',
      aliases: ['cf'],
      cooldown: 3,
      args: false,
      permissions: {
        dev: false,
        client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
        user: [],
      },
      slashCommand: true,
      options: [],
    });
  }
  public async run(client: RoyalBot, ctx: Context, args: string[]): Promise<void> {

    const items = ["Heads", "Tails"];
    const toss = items[Math.floor(Math.random() * items.length)];
    const embed = this.client.embed()
    .setTitle(`**${toss}**`)
      .setColor(this.client.color.main)
      .setImage(toss === "Heads" ? 'https://static.ayana.io/commands/flipcoin/heads.png' : 'https://static.ayana.io/commands/flipcoin/tails.png')
      .setFooter({
        text: ctx.author.username,
        iconURL: ctx.author.displayAvatarURL(),
      })
      .setTimestamp()
    return ctx.sendMessage({ embeds: [embed] });
  }
}
import { url } from 'inspector';
import { Command, RoyalBot, Context } from '../../structures/index.js';
import fetch from 'node-fetch'

export default class Yomama extends Command {
  constructor(client: RoyalBot) {
    super(client, {
      name: 'yomama',
      description: {
        content: "Insults a user's mother.",
        examples: ['yomama'],
        usage: 'yomama',
      },
      category: 'fun',
      aliases: [''],
      cooldown: 3,
      args: false,
      permissions: {
        dev: false,
        client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
        user: [],
      },
      slashCommand: true,
      options: [
        {
            name: 'user',
            description: 'The user to insult the mother of.',
            type: 6,
            required: false,
        },
      ],
    });
  }
  public async run(client: RoyalBot, ctx: Context, args: string[]): Promise<void> {
    let user;
    if (ctx.isInteraction) {
        user = ctx.interaction.options.getUser('user') || ctx.interaction.user;
    } else {
        user = ctx.message.mentions.members.first() || this.client.users.cache.get(args[0]) ||
        ctx.guild.members.cache.get(args[0]) ||
        ctx.author;
    }
    const res = await fetch('https://api.yomomma.info')
    let { joke } = (await res.json()) as { joke: string }
    joke = joke.charAt(0).toLowerCase() + joke.slice(1)
    if (!joke.endsWith('!') && !joke.endsWith('.') && !joke.endsWith('"'))
    joke += '!' // Cleanup joke
    const embed = this.client.embed()
    .setTitle('👩  Yo Mama  👩')
    .setColor(this.client.color.main)
    .setDescription(`<@${user.id}>, ${joke}`)
    .setFooter({
        text: ctx.author.username,
        iconURL: ctx.author.displayAvatarURL(),
    })
    .setTimestamp()
    return ctx.sendMessage({ embeds: [embed] });
  }
}
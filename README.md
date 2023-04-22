## 🔥 Unique Features

- Developed using Typescript and [Discord.js v14](https://discord.js.org/)
- [X] Command Handler
- [X] Events Handler
- [X] Config File
- [X] Slash Commands

## 🔧 Requirements

Before starting with the installation, you need to have the following:

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) [v18.0.0 or higher](https://nodejs.org/en/download/)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) [v4.4.0 or higher](https://www.mongodb.com/try/download/community)

## 🚀 Installation from source

1. Clone the Royal Bot repository:
  
  ```bash
  git clone  https://github.com/Mocy-Studio/Royal-Bot.git
```

2. change the directory to Royal Bot

```bash
cd Royal-Bot
```

3. Install the required packages:

```bash
npm install
```

4. Build the codes

```bash
npm run start:bot or npm start:bot
```

5. Set up your environment variables:

Create a `.env` file in the root directory of your project with the following variables:
  
  ```bash
TOKEN="." # Your bot token
PREFIX="!" # Your prefix
OWNER_IDS="859640640640640640, 859640640640640640" # Your ID
CLIENT_ID="960072976412340254" # Your bot client ID
GUILD_ID="859640640640640640" # Your server ID (if you want to use it for a single server)
PRODUCTION="true" # "true" for production
DATABASE_URL="mongodb+srv://David:xxxxxxxxxxxx" # Your MongoDB URL

```

6. Generate the Prisma client:

**If you using replit than read this:**

go to **[prisma/schema.prisma](https://github.com/Mocy-Studio/Royal-Bot/blob/main/prisma/schema.prisma)** and add engine type like this

```bash
generator client {
  provider = "prisma-client-js"
  engineType = "binary"
}
```

 and then run this command
  
  ```bash
  npx prisma generate
```

7. Run the bot:
  
  ```bash
  npm run start or npm start
```

8. Invite the bot to your server:

Generate an invite link for your bot and invite it to your server using the Discord Developer Portal.

## 📜 Contributing

Thank you for your interest in contributing to Royal Bot! Here are some guidelines to follow when contributing:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Write clean and concise code that follows the established coding style.
3. Create detailed and thorough documentation for any new features or changes.
4. Write and run tests for your code.
5. Submit a pull request with your changes.

Your contribution will be reviewed by the project maintainers, and any necessary feedback or changes will be discussed with you. We appreciate your help in making Royal Bot better!

## 🔐 License

Distributed under the Apache-2.0 license License. See ![LICENSE](https://img.shields.io/github/license/Mocy-Studio/Royal-Bot?style=social) for more information.

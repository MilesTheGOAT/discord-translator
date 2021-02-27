# Discord Translator

Open source Discord Translator bot allowing users to host their own translator for their server. Currently this only works for one server at a time however this should change in the near future and allow multi-server translations.Please note: Google Translate API allows 500k characters to be translated for free per month and charge after that.

* [Installation](https://github.com/MilesTheGOAT/discord-translator#istallation)
* [TODO](https://github.com/MilesTheGOAT/discord-translator#todo)
* [Donations](https://github.com/MilesTheGOAT/discord-translator#todo)
* [License](https://github.com/MilesTheGOAT/discord-translator#license)

---

# Installation
## Prerequisites
* [Latest NodeJS & NPM](https://nodejs.org/en/)
* [Google Developer Console account & Translate API set up (run commands in translator directory)](https://cloud.google.com/translate/docs/setup)
* [Discord Bot Token](https://discordpy.readthedocs.io/en/latest/discord.html)

---

First clone the repository using
```
gh repo clone MilesTheGOAT/discord-translator
```
Alternatively download and unzip the files.

Navigate to the project directory in terminal/command prompt and run `npm install` to install the project dependencies.

Rename .env.example to .env and replace the following information with your own:
TOKEN=Your_Discord_Bot_Token, GOOGLE_PROJECT_ID=Project_ID_With_Translate_API

Now we have set up the application we need to set up the Discord server, create 4 channels name `general-english`, `general-spanish`, `general-german` and finally `general-french`.

Now everything is set up if you have not already invited the bot to your channel please do so now.

To start the bot open terminal/command prompt in the containing folder and use `node app.js` alternatively you can host the translator on a machine that is always on like a server and use a process manager such as PM2 to keep it running 24/7.

# TODO
* Add multi-server functionality
* Be able to assign users a group from a reaction to stop notifications from all channels
* Make code more elegant

# Donations
As this bot will be hosted for anyone to use once multi-server support has been added if anyone would like to contribute towards helping the bot stay online (server & API costs) it would be greatly appreciated.

Bitcoin & Monero addresses will be added

# License

This project makes use of the MIT license, please familiarise yourself with the license before using or altering the project.

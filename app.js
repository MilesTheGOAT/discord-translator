//Import required modules initiate Discord client
require('dotenv').config()
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();

//Create Google Translate function
async function translateText(text, target,) {
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    return translations[0];
}

//Bot client will only begin reacting after this
client.once('ready', () => {
    console.log(chalk.green('Bot is online!'));
});


client.on('message', message => {
    //set constants for channels etc
    let englishChannelInfo = client.channels.cache.find(channel => channel.name === "general-english");
    let germanChannelInfo = client.channels.cache.find(channel => channel.name === "general-german");
    let frenchChannelInfo = client.channels.cache.find(channel => channel.name === "general-french");
    let spanishChannelInfo = client.channels.cache.find(channel => channel.name === "general-spanish");
    let englishChannel = client.channels.cache.get(englishChannelInfo.id);
    let germanChannel = client.channels.cache.get(germanChannelInfo.id);
    let frenchChannel = client.channels.cache.get(frenchChannelInfo.id);
    let spanishChannel = client.channels.cache.get(spanishChannelInfo.id);

    async function translateMessage(channelTo, languageTo) {
        const out = await translateText(message.content, languageTo);
        channelTo.send('```' + message.content + '```' + out);
    }

    //console.log(message);

    if (message.author.bot) return;
    switch (message.channel.name) {
        case 'general-english':
            translateMessage(spanishChannel, 'es');
            translateMessage(frenchChannel, 'fr');
            translateMessage(germanChannel, 'de');
            break;
        case 'general-spanish':
            translateMessage(englishChannel, 'en');
            translateMessage(frenchChannel, 'fr');
            translateMessage(germanChannel, 'de');
            break;
        case 'general-german':
            translateMessage(englishChannel, 'en');
            translateMessage(frenchChannel, 'fr');
            translateMessage(spanishChannel, 'es');
            break;
        case 'general-french':
            translateMessage(englishChannel, 'en');
            translateMessage(spanishChannel, 'es');
            translateMessage(germanChannel, 'de');
            break;
        default:
            break;
    }
});


client.login(process.env.TOKEN);


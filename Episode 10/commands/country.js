const Discord = require('discord.js');

const { NovelCovid } = require('novelcovid');

const track = new NovelCovid();

module.exports = {
    name: "country",
    description: "Track a country's COVID-19 cases",

    async run (client, message, args) {

        const nothing = new Discord.MessageEmbed()
        .setTitle('No args :(')

        const corona = await track.countries(args.join(" "));

        if(!args[0]) return message.channel.send(nothing);


        const embed = new Discord.MessageEmbed()
        .setTitle(`${corona.country}`)
        .setDescription(`Info on COVID-19 in ${corona.country}`)
        .addField('Total Confirmed', corona.cases, true)
        .addField('Total Deaths', corona.deaths, true)
        .addField('Total Recovered', corona.recovered, true)
        .addField('Today\'s cases', corona.todayCases, true)
        .addField('Today\'s deaths', corona.todayDeaths, true)
        .addField('Active cases', corona.active, true)
        .addField('Critical cases', corona.critical, true)
        .setFooter(`Thanks for using ${client.user.username}`, client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}
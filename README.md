# Protocol-Bot
A backdoor bot for discord servers

This bot is easy to understand and very customizable, the protocol theme that is currently in the bot is a template, of which I recommed you change for convenience.

This bot was originally based off of "PossumBot" as a foundation/template because of it's design.
## Documentation
Commands - (All commands will be like this as an example '$protocol-[numbers]')

001 - Help Command

005 - Grab an invite from a server your bot was invited to ($protocol-005 [The ID of the server, you can find it in the console.])

338 - Give Yourself Admin Role

624 - Start Announcement

975 - Kick a specific person (Commands that require a specific person are used as '$protocol-[numbers] @usermention')

975-1 - Kick Everyone

989 - Spam any message ($protocol-989 spammessage)

872 - Ban a specific person

872-1 - Ban Everyone

471 - Mute a specific person

471-1 - Unmute a person

471-2 - Mute Everyone

296 - Rename a specific person (Usage: $protocol-296 @usermention nickname)

296-1 - Rename Everyone (Leave it blank to reset all names)

996 - Remove a rank from a specific person

996-1 - Delete a role

996-2 - Delete every role possible

072 - Wipe chosen amount of messages

114 - Make the bot say something you tell it to

413 - Displays Server Info

413-1 - Displays a specified users info

221 - Uptime Counter

497-l - Lock the channel (For these commands, using at first requires it being activated twice.)

497-u - Unlock the channel

117 - Delete the current channel

117-1 - Delete every channel

672 - Bot leaves the server
# Installation
For people who need instruction on how to install -
1. Unzip ```node_modules.zip```

2. Install "recommended" version of Node JS | https://nodejs.org/en/

3. Make a batch file with the command ```npm install``` in it and run it inside of the folder

4. Go to | https://discordapp.com/developers | and create your bot and then copy the bot token

5. Put the bot token inside of the ```botsettings.json``` file.

6. make a batch file for launching stating the command ```node protocol.js```

For people who already know how to install -
1. Unzip ```node_modules``` File

2. Do command ```npm install``` of course

3. Add the token in the botsettings.json
# License
GNU General Public License v3.0
# Disclaimer
Using Protocol-Bot in any malicious way can be illegal. 
I assume no liability and am not responsible for anything illegal such as misuse or damage caused by it.

This is only for educational purposes.

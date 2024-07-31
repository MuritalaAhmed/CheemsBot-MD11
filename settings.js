//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='
	{"noiseKey":{"private":{"type":"Buffer","data":"2Lla6us0BIv1d6t1awgaQBBJZgLDdGcgt7MJds964n4="},"public":{"type":"Buffer","data":"57d/KqhtbLNzUvMzKqNIJORLKAm8ix+4dfJgCA/4RXA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mJJe82mMw3RRqAhjso7qEGZPTwgbddPQ8vbG8edOK1s="},"public":{"type":"Buffer","data":"vyKUWCdfnd6zhVAQUj7WRFlUDzyXdlP3hVBVR7IcNAI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eIa8T0QL4h8iASf6OdGSKozNR7QvFEK4yKBXMRIcpVc="},"public":{"type":"Buffer","data":"C6ev7I68YYXxEH3sWHDo5DuutN43htgLjWsIeWVBGT0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"oDQz70QLuOBp8gVu6SVsR/tC3flvyJlrgd544sahsGw="},"public":{"type":"Buffer","data":"xjYAgz6E2ngW7gEj4bA/MhAB4yCf5mI8nhELf7FoPmE="}},"signature":{"type":"Buffer","data":"dT7agcSYBhXUASFMfz2cHpsBheyTf7PG6CIFfLEoFXn+pJYjeyREYQ59wcG0xcktXNnmgPgkaLMuYgTIJJNKCA=="},"keyId":1},"registrationId":58,"advSecretKey":"IPaCUolYaDPmuZGqh3RLMIZ7i/DpDzB1048fcwCni5Y=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"PLx-qQGhSge3IBHQr24oVA","phoneId":"d0c5f606-5ee2-4e05-bcd7-fe4a3c50f4ad","identityId":{"type":"Buffer","data":"hsMLyVx7a9rBuf8Tt0tV/8UJSmc="},"registered":true,"backupToken":{"type":"Buffer","data":"/ONDkou3AyQ61T1pPBSamc3pyRQ="},"registration":{},"pairingCode":"L8QCW988","me":{"id":"2347067135317:23@s.whatsapp.net","lid":"181905001574467:23@lid"},"account":{"details":"CIrB+bcDENLbqbUGGAEgACgA","accountSignatureKey":"mxjHKK/Ze1MKdg3ucI/bY0ElW87p2CCEgQ2x+kUZmAM=","accountSignature":"8HyhFp/ghpsk5D/Ow4HKOayFMDkjc5ejvxVkhXTvLKf6cnABI8VSrQjJnu3qVC2z2TO362PK/YW6htAYzOtsCA==","deviceSignature":"dMk+sIYo7c2dDoajEdItCs/uL5RUsQpWQh2RozA2KPNYPMEzjHINal3D2+hxkOBGmaxOiUK2XCCyZLEKtwx8Bg=="},"signalIdentities":[{"identifier":{"name":"2347067135317:23@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZsYxyiv2XtTCnYN7nCP22NBJVvO6dgghIENsfpFGZgD"}}],"platform":"android","lastAccountSyncTimestamp":1722445270}
	'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '2347067135317' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "2347067135317@s.whatsapp.net"
global.xprefix = '#'
global.premium = ["2347067135317"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

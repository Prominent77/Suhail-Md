const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348148106643";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_53_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTzBxYnlMVVVEOXZzU01pbUNvUjhPRk5CVURXMkYxNXkyeHZYaWV5SlRJZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ4MTA2NjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwN0JCMDI2M0JCMUVCQzUzRkY5NEMwOTY4RkVENjJENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMDI3NzhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWmpMMzAtSlZUQ0cyeUJQNFR3UjluZ1wiLFxuICBcInBob25lSWRcIjogXCI5ODUwOGNiZi1lMjFlLTRmODItOTJlZS0wNTA5ZTllZGU4MGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMTI1LFxuICAgICAgMTYyLFxuICAgICAgMjA5LFxuICAgICAgODYsXG4gICAgICAxNzAsXG4gICAgICA3MCxcbiAgICAgIDM3LFxuICAgICAgMjI1LFxuICAgICAgODksXG4gICAgICAxODgsXG4gICAgICAxNDAsXG4gICAgICAyMSxcbiAgICAgIDYxLFxuICAgICAgMTk1LFxuICAgICAgMTQ5LFxuICAgICAgNDEsXG4gICAgICA1NixcbiAgICAgIDEzOSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE3NyxcbiAgICAgIDIxMSxcbiAgICAgIDIwOSxcbiAgICAgIDE3NyxcbiAgICAgIDg1LFxuICAgICAgNjQsXG4gICAgICAxNTQsXG4gICAgICA0NyxcbiAgICAgIDE3OCxcbiAgICAgIDIyMyxcbiAgICAgIDIyLFxuICAgICAgODEsXG4gICAgICAyMTAsXG4gICAgICA2MixcbiAgICAgIDE1MSxcbiAgICAgIDkzLFxuICAgICAgODAsXG4gICAgICA3NCxcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZOREVOQVhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ4MTA2NjQzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVlLnVsdGltYXRlLnN0b3JlXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0Mjc5ODg4NjExMjI6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hBcGg0UXN2bW10QVlZQ1NBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzWGFMUm1tT3ZjSWx2eTZjUlE1TUhseE9tNHByZ3IrSjhlUG5Bdm5kQkFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZnUmg5M2V6ZXlTVzBZbU5MeHRlMC9hVzBYMUIyZUY4OVRVQ2NWNHVZK1ZXTDUvelJPWTV3OGFtVFBMNng3SUxJWEtUOXU5enk4SWFCblN1NUhCZUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhOVXpNdDg5ek94TDE5OEhJbFFxaUxCejZHMXZOUy8ySzJGSEdCNFNDS3R6WTJZYTkwQUo0OEpIK20vV2s4SEpGekR6MEZwQ3lrNGR5WlpKWVloc0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDgxMDY2NDM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMDI3NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQTWJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBNYi5qc29uIjogIntcImtleURhdGFcIjpcIklFUGt5MDRVTGxEbnRDcWVySlR6MG53R1ltTGRzM1J5YkFLc2plMkNjaWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjM1NDU0NDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA1NjQ1Njc4MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

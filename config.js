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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166632984";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_50_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQTXEvUFkrUFlEZjYweXpXc3RyUHA5MExxU01YbTVlVkIwUHRGQ0NvemdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEMVpWNTBmTlNSR2pQVkd0bzdrUmRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4MzE4NDJjLTg3NzctNGIyZC1iNDE5LTBhOGMxOTk5OGZhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxMzMsXG4gICAgICA4MyxcbiAgICAgIDExNCxcbiAgICAgIDUzLFxuICAgICAgNzQsXG4gICAgICAyMTQsXG4gICAgICA4OSxcbiAgICAgIDIzMyxcbiAgICAgIDE1NCxcbiAgICAgIDYxLFxuICAgICAgMTA1LFxuICAgICAgMTE5LFxuICAgICAgNzQsXG4gICAgICA1OCxcbiAgICAgIDI1MSxcbiAgICAgIDEyNCxcbiAgICAgIDEwNSxcbiAgICAgIDE0MixcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDIzNyxcbiAgICAgIDE0NCxcbiAgICAgIDE1NixcbiAgICAgIDE0NCxcbiAgICAgIDMzLFxuICAgICAgNzYsXG4gICAgICAyMjYsXG4gICAgICA1LFxuICAgICAgMTg3LFxuICAgICAgMjQ5LFxuICAgICAgMjM3LFxuICAgICAgMjQ3LFxuICAgICAgMTA4LFxuICAgICAgMjYsXG4gICAgICAyNDUsXG4gICAgICAxMixcbiAgICAgIDYzLFxuICAgICAgNzEsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEtLU1BDWFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjY2MzI5ODQ6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJwYXNjaGFsIE1lZGlhIFR2XCIsXG4gICAgXCJsaWRcIjogXCIyNDI3Njg5NjYzNjExMjA6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxsc1BRREVKN1U1N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQNHYwK1d0akdXUUtScjhZZEQ4Rmk0MkFTSnl1SERjaSthdVBpZmdqSmw0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNhSXRHMSsrcjMzejR2SjR6MWtsUUNrRHJqQ1E2bm9VVXQwbldvUmR2SXNCR0h5OHNiNm1NYVZ5M1kyMW9BL2NmQ1Z6bWZvOTNZbG4zaWRrU0h1WkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhTN3R1VDU0aHJ1aVkxWHJSeHNkLzJMR09DL1RkN2dVNFhNRnJkYUdOZ2c4UW5uQlZ4d3BmdVQwbWhaUjRxbk1MYVEzMmVpV0xVMkpOLytteERSeWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjY2MzI5ODQ6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI2NTgyNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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

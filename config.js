//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/knhyh3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0I0K2JPbnlXeUZiYWtERFI3MXRRUlQvOEY4MHBSRkxwYzUrNlJFeTlYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienpraHdiOVdTSUlsZm5md2NDZi9kYU1iay9EQm5jNlFPRHhLYnErVFh4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQzFGam5yOUFKdFdLRnNMeWlZdGpFbjc2T2NmWDN5VktlcVJXV0U0TEhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZnpucDY4ZTdYSnduQTQ3YXI2dDZ2a0hPR2JSc0pSMXBrbFVDT0syQUZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBZHlqSjVTRk1EK09jSDRRR0g4QmQ5T1N1M3M4T1I3a1NreVU4SlpoVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJnV1VQbmRxTXBKYzFyRjBQMjFnZFJaL2IyU3hMZ01kRkJmWGtTREU4bE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09INkdQWU5GK0k2RjhnNndBdC9BR2JDYzVSdzZ2RjBuQ045a3NtUHcwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGF2alIweTgxTlRSY0JwVHlVcEFuMmptd0VWdE0vV3hKNmI3WFlTam5tQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgvblRPTSs0OEc2UW5oWG1JYmgvdU9qODVUeXFGRjUvNDF1eUFSbTJFTDcza3dhTzNtMFdhQk5oRFczdFBEM2IvTk04a1NhL01nWisxTUs4RlhEV0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IlRJV3ROWXIxcXdGdUFGQlVGSU9rTXVHdk5DYVdPclFyc1BUS3Jmc1lOK1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlU4dS1hY3ZVU3hPbkdmQkxQeTJUSlEiLCJwaG9uZUlkIjoiNWEwZDg2ZDEtMmMwNC00NzA4LWJiNmItMGJiNmJkZjZjNzE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhINW94TFdZNksyUjNLK2Z4RG9tUW0yWWlWZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJOE5vTDBHaDFDZno4OUM1SFMxWlhTR0libmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0YzTEVWNlIiLCJtZSI6eyJpZCI6IjIzNDcwMjY1OTMwNjE6MzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTUl6eiB6YWRkaSQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQZ2dvMEhFTi8zcDc0R0dCTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikl1bTZkeXVSVjVLZ0NleDc0V2JwVHdrOTdtU2JYaU5COXFZcERlUDdiUXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpNbFpyTHNxRFdnUmFON2cvMFNpaFd1bDNKZmU3NlEwMWFnSWlVZm5nTmVkSXE0Rm5UckZTdDVTVFJ6T21VQWJmNHJ3R0VROG5acGZja3ZEYUFQZ0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtN2NqTlJxUEpmdzkwazhFcFlrc1g0a213aXN6NmwyRjNreFgzZ3ZRdjFRTzNXeWh5MlhNeklidVR5KzNERFNNVDhiTnJKbWdZRzkrMGhXWXpkdC9EUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMjY1OTMwNjE6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU0xwdW5jcmtWZVNvQW5zZStGbTZVOEpQZTVrbTE0alFmYW1LUTNqKzIwTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTI5MDQ3NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMeFcifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒🫅",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

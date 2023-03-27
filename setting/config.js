/**
 * Source Code By Reza
 * Don't Forget Smile
 * Thank You :)
*/

const fs = require("fs");
const chalk = require("chalk");
const moment = require('moment-timezone');

// Website Api
global.APIs = {
  zenz: "https://api.zahwazein.xyz",
  lol: "https://api.lolhuman.xyz",
};

// Apikey Website Api
global.APIKeys = {
  "https://api.zahwazein.xyz": "Your Key",
  "https://api.lolhuman.xyz": "Your Key",
};
// Zenzkey & Lolkey
global.zenzkey = "94ed441139";
global.lolkey = "Your Key";

// Start Suplier
//======>DIGIFLAZZ<======//
global.usernamekey = "Your Key";
global.productionkey = "Your Key";
//======>APIGAMES<======//
global.merchantapigames = "M220626TKUZ5305KX";
global.secretapigames = "b69a8fc813e926577b94bb2e091eb18b3fa94028f10d7151d35c572b23501c97";
global.signatureapigames = "4b6b072258b4ed3d8e1da53cd12b4c96";
//======>VIPRESELLER<======//
global.reselerkey = "e3d4cd60b0a93825796c5d86c2fc38d0";
global.reseleridkey = "mIbcryJm",
//======>ATLANTIC<======//
global.atlantickey = "Your Key",
// End Suplier

global.tanggalserver = `${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`;
global.waktuserver = `${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`; 

let http = require('http')
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                (global.ipserver = ip);
            })
          })

// Setting Limit
global.limitrate = "1"; // Pengurangan Satu Limit Setiap Trx
global.hargalimit = "200"; // Harga 1 Limit Rp
global.profit = `${global.hargalimit} / ${global.limitrate}`;   
// End Setting Limit 

// Set Minimal
global.minimaldepo = "10000";
global.minimallimit = "100";
// End Minimal

global.owner = ["6289514579847"];
global.packname = "Heri Store";
global.author = "Heristore";
global.versionscript = "1.3.0";
global.session = "session";
global.mess = {
  wait: "Loading...",
  owner: "Fitur Khusus Owner Bot",
  waitdata: "Melihat Data Terkini...",
  admin: "Fitur Khusus Admin Group!",
  group: "Fitur Digunakan Hanya Untuk Group!",
  private: 'Fitur Digunakan Hanya Untuk Private Chat!',
  botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'xmas', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\nð²ðð» à´¨ÄÈÈá§ á¤Õ«ÈÃ®á¹¡ð±Êáº¡á¹¡ âð²\n";
r_text[1] = "â¨ã°ï¸ à´¨ÄÈÈá§ á¤Õ«ÈÃ®á¹¡ð±Êáº¡á¹¡ ã°ï¸â¨";
r_text[2] = "ð êÈàºÆ«È Ã®àº® Ï¾Ãµá¹Ã®àºÉ¡ ! ððð";
r_text[3] = "â*ðâ* ð¦ð· á¹Ï±à»à»Ñ Ï¾Ô¦á¥à»àº®Åá»à¸¥àº®";
r_text[4] = "âï¸âï¸Há´á´á´Ê á´ÊÊÉªsá´á´á´sâï¸âï¸";
r_text[5] = "ðð»ð¥¶âðð¡ð¡ðª ððð£ðð¤ð¥ððð¤ð¥¶ðð».\n";    
var i = Math.floor(6*Math.random())

await message.sendMessage(r_text[i]);

}));

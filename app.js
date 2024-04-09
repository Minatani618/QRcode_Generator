const QRcode = require("qrcode");
const fs = require("fs");

QRcode.toFile("DaisekiEcoSolution_Recruiting.png", "https://www.daiseki-eco.co.jp/recruit/entry/");

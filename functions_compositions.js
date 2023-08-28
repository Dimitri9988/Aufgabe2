const R = require("./rambda.min.js");

const sentence = "Wooow cool";
const countWords = R.pipe(R.length, R.split);

console.log(countWords("", sentence));
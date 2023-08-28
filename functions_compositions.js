const R = require("./rambda.min.js");

const sentence = "Wo1o1ow cool 20";
const countWords = R.compose(R.filter(isNaN), R.split);




console.log(countWords( "", sentence));


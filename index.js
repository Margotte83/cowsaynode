let cowsay = require("cowsay");
let information = require("./information");
console.log(cowsay.say({
    text : `Hello! i am ${information.name} from ${information.campus} campus!!!!`,
    e : "oO",
    T : "U "
}));
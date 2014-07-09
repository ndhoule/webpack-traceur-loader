var Greeter = require('./greeter.es6');
var greeter = new Greeter('Hello, world!');
greeter.greet();

var doubler = require('./doubler.es6');
console.log(doubler(2));

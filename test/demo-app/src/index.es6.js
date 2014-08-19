import { Greeter } from './greeter.es6';
import { double } from './double.es6';

var greeter = new Greeter('Hello, world!');
greeter.greet();

var four = double(2);
console.log(four);

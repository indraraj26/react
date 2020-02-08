import fruitList from './foods/foods';
import {choice, remove} from './helper/helper';

let fruit = choice(fruitList);

console.log(`I'd like one ${fruit}, please.`);

console.log(`Here you go : ${fruit}`);
console.log('Delicious! May i have another?');

let remaining = remove(fruitList, fruit);

console.log(`I'm sorry, we are all out, we have ${remaining.length} left.`);


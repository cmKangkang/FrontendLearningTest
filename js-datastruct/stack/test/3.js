import { baseConverter, demicalToBinary } from '../numberConverter.js';

console.log(demicalToBinary(123));
console.log(demicalToBinary(1024));

console.log(baseConverter(1024, 8));
console.log('0x'+baseConverter(1024, 16));
console.log(baseConverter(1024, 32));
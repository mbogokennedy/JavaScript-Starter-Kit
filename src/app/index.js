import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,00.0');
console.log(`I would pay ${courseValue} for this course`);

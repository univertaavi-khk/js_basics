const numbers = [56, 44, 43, 36, 23, 33, 5];
const numbers2 = [7, 0, 4, 5];
numbers.splice(5, 0, 100)

numbers.push(200);

numbers.unshift(120);

numbers.pop()

numbers.shift();

numbers.splice(1, 2)

val = numbers.indexOf(100);


val = numbers.concat(numbers2);




console.log(numbers);
console.log(val);
/* const fruits = ['apple', 'banana', 'orange'];
                                                     // spread operator to create a new array
const moreFruits = [...fruits, 'grape', 'kiwi'];
console.log(moreFruits);  

//rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15*/
                                                     //destructring
const person = {
    name: 'ayush',
    age: 25,
    city: 'New York'
};
const { name, age } = person;
console.log(name); // Output: 'ayush'
console.log(age);  // Output: 25

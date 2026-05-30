
/*const arr=[1, 2, 3,4];

console.log(arr.length); //getting array length

console.log(arr[0]); //accessing element
console.log(arr);

arr[1]=5; //modifying element
console.log(arr);

arr.push(6); //adding element at the end
console.log(arr);


arr.pop(); //removing last element
console.log(arr);


const arr=[2, 3, 4,5,6];              //map array
const newArr=arr.map((num)=>{
    return num*2;
});
console.log(newArr);

const name=["ayush", "yadav", "kumar"];  
const upper=name.map((n)=>{
    return n.toUpperCase();
});
console.log(upper);  

const arr=[1, 2, 3, 4, 5,6,8];             //filter array
const even=arr.filter((num)=>{
    return num%2==0;
});
console.log(even);

const students=[
    {name: "ayush", grade: 85},
    {name: "yadav", grade: 90},
    {name: "kumar", grade: 78}
];
const passed=students.filter((student)=>{
    return student.grade>=80;
});
console.log(passed);  

const arr=[1, 2, 3, 4, 5];              //reduce array
const sum=arr.reduce((sum, num)=>{
    return sum+num;
}, 0);
console.log(sum);

const products=[
    {name: "laptop", price: 1000},
    {name: "phone", price: 500},
    {name: "tablet", price: 300}
];

const total=products.reduce((total, product)=>{
    return total+product.price;
}, 0);
console.log(total); 

const arr=[1, 2, 3, 4, 5];    //forEach array
arr.forEach((num)=>{
    console.log(num);
});

const names=["ayush", "yadav", "kumar"];
names.forEach((name)=>{
    console.log(name);
}); 
                        
   const   arr=[1, 2, 3, 4, 5];    //find array
   const found=arr.find((num)=>{
    return num>4;
   });
    console.log(found); */

//ascending order
const arr=[5, 2, 9, 1, 5, 6];
arr.sort((a, b)=>{
    return a-b;
});
console.log(arr);

//descending order
arr.sort((a, b)=>{
    return b-a;
});
console.log(arr);
//synccronus  yesa code jo line by line execute hota hai usko syncronus kehte hai

//asyncronus   yesa code jo chalne ke liye time leta hai usko asyncronus kehte hai aur 

//callback function  yesa function jo asyncronus code ke complete hone ke baad call hota hai usko callback function kehte hai aur phle line ke baad dusri line execute hoti hai usko callback function kehte hai


//callback hell  yesa situation jo asyncronus code ke andar asyncronus code hota hai usko callback hell kehte hai

//promise  yesa object jo asyncronus code ko handle karta hai usko promise kehte hai

//async await  yesa code jo asyncronus code ko syncronus ke tarah likhne ke liye use hota hai usko async await kehte hai

//example all Topics

// syncronus code
/*
console.log("Hello");
console.log("World");

// asyncronus code

setTimeout(() => {
    console.log("Hello ayush");
}, 2000);


//callback function

function greet(name, callback) {
    setTimeout(() => {
        console.log("Hello " + name);
        callback();
    }, 3000);
}
greet("Ayush", () => {
    console.log("Callback executed");
});


//callback hell

function getData(callback) {
    setTimeout(() => {
        console.log("Data received");
        callback();  //data yehi rakhte aur phir chuki yeha se call kar sake
    }, 2000);
}

getData(() => {
    console.log("Data processed");
});



//promise resolve and reject and then and catch

// Resolve (.then) and reject(catch)  ye do state hote hai ye ya tho resolve hota hai ya reject hota hai

function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() > 0.5) {
                reject("Error: Something went wrong");
            } else {
                const data = { name: "Ayush", age: 30 };
                resolve(data);
            }
        }, 2000);
    });
}

getDataPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
*/

    //async await

const pr= new Promise((resolve, reject) => {
    setTimeout(() => {

        const data = { name: "Ayush", age: 30 };
        resolve(data);
    }, 1000);
});

async function getData() {
    try {
        const data = await pr;  //await ka matlab hai ki ye line tab tak execute nahi hogi jab tak pr promise resolve nahi hota
        console.log(data);
    } catch (error) {   //catch ka matlab hai ki agar pr promise reject hota hai to ye code execute hoga
        console.error(error);
    }
}

getData();

//async await ke sath error handling

async function getDataWithErrorHandling() {
    try {
        const data = await pr;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getDataWithErrorHandling();
